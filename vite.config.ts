/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pathSrc = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weddinginvgor/",
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  build: {
    outDir: "dist", // Make sure this is set correctly
  },
});
