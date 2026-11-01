import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const deployment = JSON.parse(readFileSync(new URL("./vercel.json", import.meta.url), "utf8"));
const headers = Object.fromEntries(deployment.headers[0].headers.map(({ key, value }) => [key, value]));

export default defineConfig({
  plugins: [react(), {
    name: "preview-static-files",
    // Match Vercel's filesystem-first behavior instead of returning HTML for missing assets.
    configurePreviewServer(server) {
      const root = path.resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((request, response, next) => {
        let pathname;
        try { pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname); }
        catch { response.statusCode = 400; response.end("Bad request"); return; }
        const filename = path.resolve(root, "." + pathname);
        if (pathname.includes(".") && (!filename.startsWith(root + path.sep) || !existsSync(filename))) {
          response.statusCode = 404;
          response.end("Not found");
          return;
        }
        next();
      });
    },
  }],
  preview: { headers },
  build: { outDir: "build", manifest: true, sourcemap: false },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    restoreMocks: true,
    clearMocks: true,
  },
});
