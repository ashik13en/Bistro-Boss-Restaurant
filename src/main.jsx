import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);

// home work
// bistro boss section parallax effect add korba
// menu section full complete korba
