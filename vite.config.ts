import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

export default defineConfig({
  plugins: [react(), version()],
  base: "/birthday-cake/", 

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
