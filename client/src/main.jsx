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
import BoundaryWallProductPage from "./Pages/ProductPages/BoundaryWall.jsx";
import RccGardenBenchProductPage from "./Pages/ProductPages/RccGardenBench.jsx";
import GardenBenchProductPage from "./Pages/ProductPages/GardenBench.jsx";
import ConcreteBenchProductPage from "./Pages/ProductPages/ConcreteBench.jsx";
import CementPillarProductPage from "./Pages/ProductPages/CementPillar.jsx";
import FlowerPotProductPage from "./Pages/ProductPages/FlowerPot.jsx";
import TreeGuardProductPage from "./Pages/ProductPages/TreeGuard.jsx";

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
        element: <BoundaryWallProductPage />,
      },
      {
        path: "/rcc-garden-bench",
        element: <RccGardenBenchProductPage />,
      },
      {
        path: "/garden-bench",
        element: <GardenBenchProductPage />,
      },
      {
        path: "/concrete-bench",
        element: <ConcreteBenchProductPage />,
      },
      {
        path: "/cement-pillar",
        element: <CementPillarProductPage />,
      },
      {
        path: "/flower-pot",
        element: <FlowerPotProductPage />,
      },
      {
        path: "/tree-guard",
        element: <TreeGuardProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
