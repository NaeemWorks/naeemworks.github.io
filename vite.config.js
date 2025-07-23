import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace below with your GitHub repo name
const repoName = "naeemworks.github.io";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: `/${repoName}/`, // Important: Base path
  base: "/",
  server: {
    port: 3000,
  },
});
