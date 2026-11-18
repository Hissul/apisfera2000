import { useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router";
import { PageMetadata } from "../app/PageMetadata";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousLocation = useRef({ key: location.key, pathname: location.pathname });
  const currentKey = useRef(location.key);
  const scrollPositions = useRef(new Map<string, number>());
  const pendingPosition = useRef<{ key: string; scrollY: number } | null>(null);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    scrollPositions.current.set(currentKey.current, window.scrollY);

    function saveScrollPosition() {
      if (window.location.pathname !== previousLocation.current.pathname) return;
      scrollPositions.current.set(currentKey.current, window.scrollY);
    }

    function capturePosition() {
      pendingPosition.current = { key: currentKey.current, scrollY: window.scrollY };
    }

    function captureLinkNavigation(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.origin !== window.location.origin) return;
      if (link.pathname === window.location.pathname && link.hash) return;
      capturePosition();
    }

    window.addEventListener("scroll", saveScrollPosition, { passive: true });
    document.addEventListener("click", captureLinkNavigation, true);
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      document.removeEventListener("click", captureLinkNavigation, true);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const previous = previousLocation.current;
    if (previous.key === location.key) return;

    const capturedPosition = pendingPosition.current;
    scrollPositions.current.set(previous.key, capturedPosition?.key === previous.key
      ? capturedPosition.scrollY
      : (scrollPositions.current.get(previous.key) ?? window.scrollY));
    pendingPosition.current = null;
    previousLocation.current = { key: location.key, pathname: location.pathname };
    currentKey.current = location.key;

    if (location.hash) return;

    const scrollY = navigationType === "POP"
      ? (scrollPositions.current.get(location.key) ?? 0)
      : 0;
    window.scrollTo(0, scrollY);
    if (previous.pathname !== location.pathname) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }

    if (navigationType !== "POP" || window.scrollY >= scrollY - 1) return;

    let frame = 0;
    let timeout = 0;
    const observer = new ResizeObserver(() => {
      window.scrollTo(0, scrollY);
      if (window.scrollY >= scrollY - 1) stopRestoring();
    });

    function stopRestoring() {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("wheel", stopRestoring);
      window.removeEventListener("touchstart", stopRestoring);
      window.removeEventListener("keydown", stopRestoring);
    }

    observer.observe(document.body);
    frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
      if (window.scrollY >= scrollY - 1) stopRestoring();
    });
    timeout = window.setTimeout(stopRestoring, 2000);
    window.addEventListener("wheel", stopRestoring, { once: true });
    window.addEventListener("touchstart", stopRestoring, { once: true });
    window.addEventListener("keydown", stopRestoring, { once: true });

    return stopRestoring;
  }, [location.hash, location.key, location.pathname, navigationType]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-white">
      <PageMetadata />
      <a
        href="#main-content"
        className="sr-only rounded-md bg-brand-white px-4 py-3 text-brand-bronze focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:outline-3 focus:outline-offset-2 focus:outline-brand-graphite"
      >
        Перейти к содержимому
      </a>
      <Header key={location.key} />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-bronze"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
