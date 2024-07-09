/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx,js, jsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      all: true,
      include: ["**/src/**/*.{ts,tsx,js, js}"],
      exclude: [
        "**/*.test.{ts,tsx,js, js}",
        "**/types.js",
        "**/*.d.js",
        "**/src/main.jsx",
      ],
    },
    build: {
      rollupOptions: {
        external: ["i18next-http-backend"],
      },
    },
  },
});
