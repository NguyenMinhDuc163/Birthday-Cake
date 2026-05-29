import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

const base = process.env.VITE_BASE_PATH ?? "./";

export default defineConfig({
  plugins: [react(), version()],
  base,

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          lottie: ["react-lottie"],
        },
      },
    },
  },
});
