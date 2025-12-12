import { contentsDB } from "../../../../data/contents.ts";

export const handler = {
  GET(req: Request, ctx: any) {
    
    // ถ้า ctx เป็น undefined ให้ parse จาก URL แทน
    if (!ctx || !ctx.params) {
      const url = new URL(req.url);
      const pathParts = url.pathname.split('/');
      const category = decodeURIComponent(pathParts[pathParts.length - 1]);
      
      const contents = contentsDB.filter(c => 
        c.category === category && c.status === "published"
      );

      return new Response(JSON.stringify({
        success: true,
        category: category,
        count: contents.length,
        data: contents
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    // ถ้ามี ctx.params ให้ใช้ตามปกติ
    const category = decodeURIComponent(ctx.params.category);
    
    console.log("Using ctx.params - category:", category);
    
    const contents = contentsDB.filter(c => 
      c.category === category && c.status === "published"
    );

    return new Response(JSON.stringify({
      success: true,
      category: category,
      count: contents.length,
      data: contents
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};