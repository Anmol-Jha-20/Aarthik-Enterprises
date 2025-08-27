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
import RCCPoleProductPage from "./Pages/ProductPages/RccPole.jsx";
import RccBenchProductPage from "./Pages/ProductPages/RccBench.jsx";
import CompoundWallProductPage from "./Pages/ProductPages/CompoundWall.jsx";

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
      {
        path: "/rcc-pole",
        element: <RCCPoleProductPage />,
      },
      {
        path: "/compound-wall",
        element: <CompoundWallProductPage />,
      },
      {
        path: "/rcc-bench",
        element: <RccBenchProductPage />,
      },
      {
        path: "/boundary-wall",
        element: <RccBenchProductPage />,
      },
      {
        path: "/rcc-garden-bench",
        element: <RccBenchProductPage />,
      },
      {
        path: "/garden-bench",
        element: <RccBenchProductPage />,
      },
      {
        path: "/concrete-bench",
        element: <RccBenchProductPage />,
      },
      {
        path: "/cement-pillar",
        element: <RccBenchProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
