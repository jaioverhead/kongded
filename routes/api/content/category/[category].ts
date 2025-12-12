import { contentsDB } from "../../../../data/contents.ts";

export const handler = {
  GET(req: Request): Response {
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const category = decodeURIComponent(pathParts[pathParts.length - 1]);
    
    const contents = contentsDB.filter(c => 
      c.category === category && c.status === "published"
    );

    return new Response(JSON.stringify(contents), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};