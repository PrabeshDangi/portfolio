import type { ExecutionContext } from "@cloudflare/workers-types/experimental";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import viteMcp from "vite-mcp";
import {
  consoleAdapter,
  cookieAdapter,
  localStorageAdapter,
} from "vite-mcp/adapters";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: "./workers/app.ts",
        }
      : undefined,
  },
  plugins: [
    viteMcp({
      adapters: [consoleAdapter, cookieAdapter, localStorageAdapter],
    }),
    cloudflareDevProxy({
      getLoadContext({ context }) {
        return {
          cloudflare: context.cloudflare as unknown as {
            env: CloudflareEnvironment;
            ctx: ExecutionContext;
          },
        };
      },
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
}));
