import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";
import WishlistProvider from "@context/WishlistProvider";

import "@styles/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WishlistProvider>
      <AppRouter />
    </WishlistProvider>
  </StrictMode>
);
