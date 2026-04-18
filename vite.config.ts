import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY);
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: isGithubActions && repositoryName ? `/${repositoryName}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
