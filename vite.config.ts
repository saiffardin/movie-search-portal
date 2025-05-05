import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: {
      "@api": "/src/api",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@context": "/src/context",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
});
