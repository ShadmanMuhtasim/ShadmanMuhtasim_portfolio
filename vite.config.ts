import react from '@vitejs/plugin-react';
import { createServer, defineConfig } from 'vite';
import type { Plugin, ViteDevServer } from 'vite';

function prerender(): Plugin {
  let devServer: ViteDevServer | undefined;
  return {
    name: 'portfolio-prerender',
    configureServer(server) { devServer = server; },
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        const server = devServer ?? await createServer({
          configFile: false,
          root: process.cwd(),
          plugins: [react()],
          server: { middlewareMode: true },
          appType: 'custom',
        });
        try {
          const entry = await server.ssrLoadModule('/src/entry-server.tsx');
          return html.replace('<div id="root"></div>', `<div id="root">${entry.render()}</div>`);
        } finally {
          if (!devServer) await server.close();
        }
      },
    },
  };
}

export default defineConfig({ plugins: [react(), prerender()] });
