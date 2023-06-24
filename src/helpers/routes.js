import AdminPage from "../pages/private/AdminPage";
import AboutUsPage from "../pages/public/AboutUsPage";
import AuthPage from "../pages/public/AuthPage";
import HomePage from "../pages/public/HomePage";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import ProductsPage from "../pages/public/ProductsPage";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    id: 3,
    path: "/products",
    element: <ProductsPage />,
  },
  {
    id: 4,
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
  {
    id: 5,
    path: "/auth",
    element: <AuthPage />,
  },
];

export const PRIVATE_ROUTES = [
  { id: 1, path: "/admin", element: <AdminPage /> },
];
