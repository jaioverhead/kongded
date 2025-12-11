import { RouteContext } from "$fresh/server.ts";
import type { Content } from "../../../types/content.ts";

// Same articlesDB as above
const contentDB: Content[] = [
  {
    id: 1,
    slug: "web-design-modern",
    title: "การออกแบบเว็บไซต์สมัยใหม่",
    description: "เทคนิคและเครื่องมือสำหรับการออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
    content: "",
    author: "สมชาย ใจดี",
    created_at: "2024-12-10T11:11:00+07:00",
    updated_at: "2024-12-10T14:30:00+07:00",
    image: "https://placehold.co/400x300/3b82f6/ffffff?text=Web+Design",
    category: "เทคโนโลยี",
    tags: ["Web Design", "UX/UI", "Frontend"],
    views: 1234,
    status: "published"
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "พัฒนาแอปพลิเคชันมือถือ",
    description: "แนวทางการสร้างแอปมือถือที่มีประสิทธิภาพและประสบการณ์ผู้ใช้ที่ดี",
    content: "",
    author: "สมหญิง รักเรียน",
    created_at: "2024-12-09T09:30:00+07:00",
    updated_at: "2024-12-09T16:45:00+07:00",
    image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Mobile+App",
    category: "การพัฒนา",
    tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
    views: 856,
    status: "published"
  },
  {
    id: 3,
    slug: "digital-marketing",
    title: "การตลาดดิจิทัล",
    description: "กลยุทธ์การตลาดออนไลน์ที่ช่วยเพิ่มยอดขายและสร้างแบรนด์",
    content: "",
    author: "ประยุทธ์ ขายเก่ง",
    created_at: "2024-12-08T13:15:00+07:00",
    updated_at: "2024-12-08T18:20:00+07:00",
    image: "https://placehold.co/400x300/ec4899/ffffff?text=Marketing",
    category: "การตลาด",
    tags: ["Marketing", "SEO", "Social Media", "Content"],
    views: 2341,
    status: "published"
  }
];

export const handler = {
  GET(_req: Request, _ctx: RouteContext) {
    const publishedContent = contentDB
      .filter(a => a.status === "published")
      .map(({ content, ...article }) => article); // ไม่ส่ง content ในลิสต์

    return new Response(JSON.stringify(publishedContent), {
      headers: { "Content-Type": "application/json" },
    });
  },
};