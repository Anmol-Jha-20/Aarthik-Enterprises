import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AarthikGallery from "./Pages/GalleryPage.jsx";
import RCCWallProductPage from "./Pages/ProductPages/RccWall.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <AarthikGallery />,
      },
      {
        path: "/rcc-wall",
        element: <RCCWallProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
