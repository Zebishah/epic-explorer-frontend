import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "public",
    entry: "./public/index.html", // Specify the entry point
  },
});
