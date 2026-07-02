import { generateLlmTxt } from "~/utils/llmContent";

export const loader = () =>
  new Response(generateLlmTxt(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
