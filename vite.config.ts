export default defineConfig({
  base: "/Birthday-Cake/", 
  plugins: [react(), version()],
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
