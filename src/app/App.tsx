import { BrowserRouter, Route, Routes } from "react-router";
import { SiteLayout } from "../layouts/SiteLayout";
import { CataloguePage } from "../pages/CataloguePage";
import { CompanyPage } from "../pages/CompanyPage";
import { ContactsPage } from "../pages/ContactsPage";
import { DealersPage } from "../pages/DealersPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProductPage } from "../pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="catalogue/:slug" element={<ProductPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="gde-kupit" element={<DealersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
