import { BrowserRouter, Route, Routes } from "react-router";
import { SiteLayout } from "../layouts/SiteLayout";
import { CataloguePage } from "../pages/CataloguePage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PagePlaceholder } from "../pages/PagePlaceholder";
import { ProductPage } from "../pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="catalogue/:slug" element={<ProductPage />} />
          <Route
            path="company"
            element={<PagePlaceholder title="О компании" />}
          />
          <Route
            path="contacts"
            element={<PagePlaceholder title="Контакты" />}
          />
          <Route
            path="gde-kupit"
            element={<PagePlaceholder title="Где купить" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
