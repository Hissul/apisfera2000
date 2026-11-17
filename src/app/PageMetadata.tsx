import { useEffect } from "react";
import { useLocation, useMatch } from "react-router";
import { productRepository } from "../features/products/productRepository";

type Metadata = {
  title: string;
  description: string;
};

const siteName = "Аписфера 2000";

const staticMetadata: Record<string, Metadata> = {
  "/": {
    title: `${siteName} — продукция для пчеловодства`,
    description:
      "Аписфера 2000: продукция для пчеловодства, сведения о компании и способы связи.",
  },
  "/catalogue": {
    title: `Каталог продукции | ${siteName}`,
    description:
      "Каталог препаратов и кормовой добавки для пчеловодства компании «Аписфера 2000».",
  },
  "/company": {
    title: `О компании | ${siteName}`,
    description:
      "История, деятельность, научные разработки и производство компании «Аписфера 2000».",
  },
  "/contacts": {
    title: `Контакты | ${siteName}`,
    description:
      "Телефоны, электронная почта и сведения об оптовом заказе в компании «Аписфера 2000».",
  },
  "/gde-kupit": {
    title: `Где купить | ${siteName}`,
    description:
      "Интернет-магазины и розничные продавцы из списка компании «Аписфера 2000».",
  },
};

const notFoundMetadata: Metadata = {
  title: `Страница не найдена | ${siteName}`,
  description: "Запрошенная страница не найдена.",
};

function setMetadata({ title, description }: Metadata) {
  document.title = title;
  document
    .querySelector<HTMLMetaElement>('meta[name="description"]')
    ?.setAttribute("content", description);
}

export function PageMetadata() {
  const { pathname } = useLocation();
  const productMatch = useMatch("/catalogue/:slug");
  const productSlug = productMatch?.params.slug;

  useEffect(() => {
    const metadata = staticMetadata[pathname];
    if (metadata) {
      setMetadata(metadata);
      return;
    }

    if (!productSlug) {
      setMetadata(notFoundMetadata);
      return;
    }

    let active = true;
    setMetadata({
      title: `Продукция | ${siteName}`,
      description: `Сведения о продукции компании «${siteName}».`,
    });

    productRepository.getBySlug(productSlug).then(
      (product) => {
        if (!active) return;
        setMetadata(
          product
            ? {
                title: `${product.name} | ${siteName}`,
                description: `Сведения о продукте «${product.name}» компании «${siteName}».`,
              }
            : notFoundMetadata,
        );
      },
      () => {
        if (active) {
          setMetadata({
            title: `Не удалось загрузить продукт | ${siteName}`,
            description: "Не удалось загрузить информацию о продукте.",
          });
        }
      },
    );

    return () => {
      active = false;
    };
  }, [pathname, productSlug]);

  return null;
}
