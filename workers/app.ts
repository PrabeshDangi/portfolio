import { createRequestHandler } from "react-router";
import type { ExecutionContext } from "@cloudflare/workers-types";
import type { ExportedHandler } from "@cloudflare/workers-types";

declare global {
  interface CloudflareEnvironment extends Env {}
}

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment;
      ctx: ExecutionContext;
    };
  }
}

const requestHandler = createRequestHandler(
  // @ts-expect-error - virtual module provided by React Router at build time
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  // @ts-expect-error - Type mismatch between Cloudflare and standard web types
  fetch(request: Request, env: CloudflareEnvironment, ctx: ExecutionContext) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<CloudflareEnvironment>;
