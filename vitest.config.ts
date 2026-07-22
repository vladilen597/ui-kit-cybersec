import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/utils/setupTests.ts",
    alias: {
      "@/": resolve(__dirname, "./src"),
      src: resolve(__dirname, "./src"),
      "@/shared": resolve(__dirname, "./src/shared"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/utils": resolve(__dirname, "./src/utils"),
    },
  },
});
