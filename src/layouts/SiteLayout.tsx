import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  const location = useLocation()
  const previousPathname = useRef(location.pathname)

  useEffect(() => {
    if (previousPathname.current === location.pathname) return
    previousPathname.current = location.pathname
    document.getElementById('main-content')?.focus()
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-brand-white">
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
  )
}
