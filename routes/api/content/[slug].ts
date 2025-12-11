import type { Content } from "../../../types/content.ts";

// Simulated database
const contentsDB: Content[] = [
  {
    id: 1,
    slug: "web-design-modern",
    title: "การออกแบบเว็บไซต์สมัยใหม่",
    description: "เทคนิคและเครื่องมือสำหรับการออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
    detail: `
      <p class="mb-4">การออกแบบเว็บไซต์ในยุคปัจจุบันได้พัฒนาไปอย่างมาก ไม่ใช่แค่การทำให้สวยงามเท่านั้น แต่ยังต้องคำนึงถึงประสบการณ์ผู้ใช้ (User Experience) และการใช้งานที่ง่ายดาย (Usability) อีกด้วย</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">หลักการสำคัญ</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>ออกแบบให้ตอบสนองทุกขนาดหน้าจอ (Responsive Design)</li>
        <li>ใช้สีและฟอนต์ที่เหมาะสม</li>
        <li>จัดวาง Layout ให้เข้าใจง่าย</li>
        <li>โหลดเร็วและมีประสิทธิภาพ</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-6">เครื่องมือที่แนะนำ</h3>
      <p class="mb-4">มีเครื่องมือมากมายที่ช่วยให้การออกแบบเว็บไซต์ง่ายขึ้น เช่น Figma, Adobe XD, Sketch และอื่นๆ อีกมากมาย</p>
      
      <p class="mb-4">นอกจากนี้ยังมี CSS Framework อย่าง Tailwind CSS, Bootstrap, DaisyUI ที่ช่วยให้พัฒนาเว็บไซต์ได้รวดเร็วขึ้น</p>
    `,
    author: "สมชาย ใจดี",
    created_at: "2024-12-10T11:11:00+07:00",
    updated_at: "2024-12-10T14:30:00+07:00",
    image: "https://placehold.co/1200x600/3b82f6/ffffff?text=Web+Design",
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
    detail: `
      <p class="mb-4">การพัฒนาแอปพลิเคชันมือถือในปัจจุบันมีหลายแพลตฟอร์มให้เลือก ทั้ง iOS, Android และ Cross-platform</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">แพลตฟอร์มยอดนิยม</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>React Native:</strong> ใช้ JavaScript พัฒนาได้ทั้ง iOS และ Android</li>
        <li><strong>Flutter:</strong> ใช้ Dart มี performance ดี</li>
        <li><strong>Swift:</strong> สำหรับ iOS โดยเฉพาะ</li>
        <li><strong>Kotlin:</strong> สำหรับ Android</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-6">ข้อควรระวัง</h3>
      <p class="mb-4">การพัฒนาแอปมือถือต้องคำนึงถึงขนาดหน้าจอที่หลากหลาย ความเร็วในการโหลด และการใช้งานแบตเตอรี่ด้วย</p>
    `,
    author: "สมหญิง รักเรียน",
    created_at: "2024-12-09T09:30:00+07:00",
    updated_at: "2024-12-09T16:45:00+07:00",
    image: "https://placehold.co/1200x600/8b5cf6/ffffff?text=Mobile+App",
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
    detail: `
      <p class="mb-4">การตลาดดิจิทัลเป็นสิ่งสำคัญในยุคที่ผู้คนใช้เวลาออนไลน์เป็นส่วนใหญ่ การทำการตลาดแบบดั้งเดิมอาจไม่เพียงพออีกต่อไป</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ช่องทางการตลาดดิจิทัล</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Social Media Marketing (Facebook, Instagram, TikTok)</li>
        <li>Search Engine Marketing (Google Ads, SEO)</li>
        <li>Email Marketing</li>
        <li>Content Marketing</li>
        <li>Influencer Marketing</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 mt-6">กลยุทธ์ที่ได้ผล</h3>
      <p class="mb-4">การสร้าง Content ที่มีคุณค่า การวิเคราะห์ข้อมูล และการปรับกลยุทธ์อย่างต่อเนื่องเป็นกุญแจสำคัญของความสำเร็จ</p>
    `,
    author: "ประยุทธ์ ขายเก่ง",
    created_at: "2024-12-08T13:15:00+07:00",
    updated_at: "2024-12-08T18:20:00+07:00",
    image: "https://placehold.co/1200x600/ec4899/ffffff?text=Marketing",
    category: "การตลาด",
    tags: ["Marketing", "SEO", "Social Media", "Content"],
    views: 2341,
    status: "published"
  }
];

export const handler = {
  GET(req: Request): Response {
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const slug = pathParts[pathParts.length - 1];
    
    const content = contentsDB.find(c => c.slug === slug);

    if (!content) {
      return new Response(JSON.stringify({ error: "Content not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(content), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};