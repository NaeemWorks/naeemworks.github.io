import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: `/${repoName}/`, // Important: Base path
  base: "/",
  server: {
    port: 3000,
  },
});
