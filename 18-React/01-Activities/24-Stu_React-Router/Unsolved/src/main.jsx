import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";

// ✅ Router setup (nested routes):
// - App is the layout (Nav + shared wrapper)
// - children are the pages that swap inside <Outlet />
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // Home page on first load
      { index: true, element: <HomePage /> },

      // TODO 1: Add an About route that loads <AboutPage />
      // Example:
      // { path: "about", element: <AboutPage /> },

      // TODO 2: Add a Profile route with a URL param called `id`
      // Example:
      // { path: "profile/:id", element: <ProfilePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
