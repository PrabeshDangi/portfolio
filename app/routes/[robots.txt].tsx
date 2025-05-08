import { BASE_URL } from "../utils/metadata";

export const loader = () => {
  const robotText = `
      User-agent: *
      Allow: /
      Sitemap: ${BASE_URL}/sitemap.xml
      `;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
