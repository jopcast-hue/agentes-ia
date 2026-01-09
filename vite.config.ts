import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Para GitHub Pages, siempre usar el base path en producción
  const base = process.env.GITHUB_PAGES === 'true' || mode === "production" 
    ? "/agentes-ia/" 
    : "/";
  
  return {
    base,
  server: {
    host: "::",
    port: 8080,
  },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
