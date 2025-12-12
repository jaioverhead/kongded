import type { Content } from "../types/content.ts";

export const contentsDB: Content[] = [
  // เทคโนโลยี - 5 รายการ
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
    slug: "artificial-intelligence-future",
    title: "อนาคตของปัญญาประดิษฐ์",
    description: "AI กำลังเปลี่ยนแปลงโลกอย่างไร และเราจะเตรียมพร้อมอย่างไร",
    detail: `
      <p class="mb-4">ปัญญาประดิษฐ์ไม่ใช่เรื่องไกลตัวอีกต่อไป มันอยู่รอบตัวเราทุกวันนี้ ตั้งแต่ระบบแนะนำสินค้า ไปจนถึงรถยนต์ขับเคลื่อนอัตโนมัติ</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ประยุกต์ใช้ AI</h3>
      <p class="mb-4">AI ถูกนำมาใช้ในหลากหลายอุตสาหกรรม ทั้งการแพทย์ การเงิน การศึกษา และการผลิต</p>
    `,
    author: "ดร.สมศักดิ์ เทคโนโลยี",
    created_at: "2024-12-11T15:20:00+07:00",
    updated_at: "2024-12-11T16:45:00+07:00",
    image: "https://placehold.co/1200x600/6366f1/ffffff?text=AI+Future",
    category: "เทคโนโลยี",
    tags: ["AI", "Machine Learning", "Technology"],
    views: 2156,
    status: "published"
  },
  {
    id: 3,
    slug: "blockchain-explained",
    title: "Blockchain คืออะไร และทำงานอย่างไร",
    description: "ทำความเข้าใจเทคโนโลยี Blockchain ที่อยู่เบื้องหลัง Cryptocurrency",
    detail: `
      <p class="mb-4">Blockchain เป็นเทคโนโลยีที่ปฏิวัติวงการการเงินและหลายอุตสาหกรรม มันคือฐานข้อมูลแบบกระจายที่ไม่สามารถแก้ไขได้</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">หลักการทำงาน</h3>
      <p class="mb-4">ข้อมูลถูกเก็บในรูปแบบของ "Block" ที่เชื่อมโยงกันเป็นลูกโซ่ ทำให้ตรวจสอบได้และปลอดภัย</p>
    `,
    author: "นายบิตคอยน์ คริปโต",
    created_at: "2024-12-09T10:30:00+07:00",
    updated_at: "2024-12-09T14:15:00+07:00",
    image: "https://placehold.co/1200x600/a855f7/ffffff?text=Blockchain",
    category: "เทคโนโลยี",
    tags: ["Blockchain", "Cryptocurrency", "Web3"],
    views: 1567,
    status: "published"
  },
  {
    id: 4,
    slug: "cloud-computing-basics",
    title: "Cloud Computing เบื้องต้น",
    description: "เริ่มต้นทำความเข้าใจกับ Cloud Computing และบริการต่างๆ",
    detail: `
      <p class="mb-4">Cloud Computing คือการให้บริการทรัพยากรคอมพิวเตอร์ผ่านอินเทอร์เน็ต ไม่ว่าจะเป็น Server, Storage, หรือ Software</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ประเภทของ Cloud</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Public Cloud - AWS, Google Cloud, Azure</li>
        <li>Private Cloud - สำหรับองค์กร</li>
        <li>Hybrid Cloud - ผสมผสานทั้งสอง</li>
      </ul>
    `,
    author: "วิศวกร คลาวด์",
    created_at: "2024-12-08T09:00:00+07:00",
    updated_at: "2024-12-08T11:20:00+07:00",
    image: "https://placehold.co/1200x600/06b6d4/ffffff?text=Cloud",
    category: "เทคโนโลยี",
    tags: ["Cloud", "AWS", "Infrastructure"],
    views: 987,
    status: "published"
  },
  {
    id: 5,
    slug: "iot-smart-home",
    title: "IoT และ Smart Home",
    description: "เชื่อมต่ออุปกรณ์ในบ้านให้อัจฉริยะด้วย IoT",
    detail: `
      <p class="mb-4">Internet of Things (IoT) ทำให้อุปกรณ์ต่างๆ สามารถเชื่อมต่อและสื่อสารกันได้ ทำให้บ้านของเราอัจฉริยะขึ้น</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ตัวอย่างอุปกรณ์ Smart Home</h3>
      <p class="mb-4">หลอดไฟอัจฉริยะ, เทอร์โมสแตท, กล้องรักษาความปลอดภัย, ลำโพง Smart Speaker</p>
    `,
    author: "สมาร์ท โฮม",
    created_at: "2024-12-07T13:45:00+07:00",
    updated_at: "2024-12-07T15:30:00+07:00",
    image: "https://placehold.co/1200x600/f97316/ffffff?text=IoT",
    category: "เทคโนโลยี",
    tags: ["IoT", "Smart Home", "Automation"],
    views: 1432,
    status: "published"
  },

  // การพัฒนา - 4 รายการ
  {
    id: 6,
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
    id: 7,
    slug: "full-stack-development",
    title: "Full Stack Development ในปี 2024",
    description: "ทักษะที่ Full Stack Developer ต้องมีในยุคปัจจุบัน",
    detail: `
      <p class="mb-4">Full Stack Developer คือนักพัฒนาที่สามารถทำงานได้ทั้ง Frontend และ Backend รวมถึงการจัดการ Database</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">เทคโนโลยีที่ควรรู้</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Frontend: React, Vue, Angular</li>
        <li>Backend: Node.js, Python, Go</li>
        <li>Database: PostgreSQL, MongoDB</li>
        <li>DevOps: Docker, Kubernetes</li>
      </ul>
    `,
    author: "นักพัฒนา ฟูลสแต็ค",
    created_at: "2024-12-11T08:15:00+07:00",
    updated_at: "2024-12-11T10:30:00+07:00",
    image: "https://placehold.co/1200x600/10b981/ffffff?text=Full+Stack",
    category: "การพัฒนา",
    tags: ["Full Stack", "Web Development", "Programming"],
    views: 1789,
    status: "published"
  },
  {
    id: 8,
    slug: "api-design-best-practices",
    title: "Best Practices สำหรับการออกแบบ API",
    description: "หลักการออกแบบ RESTful API ที่ดี",
    detail: `
      <p class="mb-4">การออกแบบ API ที่ดีเป็นสิ่งสำคัญสำหรับการพัฒนาซอฟต์แวร์ ทำให้ระบบทำงานร่วมกันได้อย่างมีประสิทธิภาพ</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">หลักการสำคัญ</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>ใช้ HTTP Methods อย่างถูกต้อง (GET, POST, PUT, DELETE)</li>
        <li>ตั้งชื่อ Endpoint ให้ชัดเจน</li>
        <li>ใช้ Status Code ที่เหมาะสม</li>
        <li>จัดการ Error อย่างมีระบบ</li>
      </ul>
    `,
    author: "API Master",
    created_at: "2024-12-10T14:00:00+07:00",
    updated_at: "2024-12-10T16:20:00+07:00",
    image: "https://placehold.co/1200x600/22c55e/ffffff?text=API+Design",
    category: "การพัฒนา",
    tags: ["API", "REST", "Backend"],
    views: 1234,
    status: "published"
  },
  {
    id: 9,
    slug: "testing-strategies",
    title: "กลยุทธ์การทดสอบซอฟต์แวร์",
    description: "วิธีการทดสอบที่ทำให้ซอฟต์แวร์มีคุณภาพ",
    detail: `
      <p class="mb-4">การทดสอบซอฟต์แวร์เป็นส่วนสำคัญของกระบวนการพัฒนา ช่วยให้มั่นใจว่าโค้ดทำงานได้ถูกต้องและมีคุณภาพ</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">ประเภทของการทดสอบ</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Unit Testing - ทดสอบฟังก์ชันย่อย</li>
        <li>Integration Testing - ทดสอบการทำงานร่วมกัน</li>
        <li>End-to-End Testing - ทดสอบระบบทั้งหมด</li>
      </ul>
    `,
    author: "QA Engineer",
    created_at: "2024-12-06T11:30:00+07:00",
    updated_at: "2024-12-06T14:45:00+07:00",
    image: "https://placehold.co/1200x600/3b82f6/ffffff?text=Testing",
    category: "การพัฒนา",
    tags: ["Testing", "QA", "Quality"],
    views: 945,
    status: "published"
  },

  // การตลาด - 3 รายการ
  {
    id: 10,
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
    `,
    author: "ประยุทธ์ ขายเก่ง",
    created_at: "2024-12-08T13:15:00+07:00",
    updated_at: "2024-12-08T18:20:00+07:00",
    image: "https://placehold.co/1200x600/ec4899/ffffff?text=Marketing",
    category: "การตลาด",
    tags: ["Marketing", "SEO", "Social Media", "Content"],
    views: 2341,
    status: "published"
  },
  {
    id: 11,
    slug: "social-media-strategy",
    title: "กลยุทธ์ Social Media Marketing",
    description: "วิธีสร้าง Engagement และเพิ่ม Followers บน Social Media",
    detail: `
      <p class="mb-4">Social Media เป็นช่องทางที่ทรงพลังสำหรับการสร้างแบรนด์และเข้าถึงลูกค้า แต่ต้องมีกลยุทธ์ที่ชัดเจน</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">เคล็ดลับความสำเร็จ</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>สร้าง Content ที่มีคุณค่า</li>
        <li>โพสต์อย่างสม่ำเสมอ</li>
        <li>มีปฏิสัมพันธ์กับผู้ติดตาม</li>
        <li>ใช้ Hashtag อย่างมีกลยุทธ์</li>
      </ul>
    `,
    author: "โซเชียล มีเดีย",
    created_at: "2024-12-11T09:00:00+07:00",
    updated_at: "2024-12-11T12:15:00+07:00",
    image: "https://placehold.co/1200x600/f43f5e/ffffff?text=Social+Media",
    category: "การตลาด",
    tags: ["Social Media", "Instagram", "Facebook", "TikTok"],
    views: 1876,
    status: "published"
  },
  {
    id: 12,
    slug: "email-marketing-guide",
    title: "คู่มือ Email Marketing ฉบับสมบูรณ์",
    description: "เทคนิคการทำ Email Marketing ให้มี Conversion สูง",
    detail: `
      <p class="mb-4">Email Marketing ยังคงเป็นช่องทางที่มี ROI สูงที่สุด แต่ต้องทำอย่างถูกวิธี</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">องค์ประกอบของ Email ที่ดี</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Subject Line ที่น่าสนใจ</li>
        <li>เนื้อหาที่ตรงกับกลุ่มเป้าหมาย</li>
        <li>CTA ที่ชัดเจน</li>
        <li>การออกแบบที่ดูดี</li>
      </ul>
    `,
    author: "อีเมล มาร์เก็ตติ้ง",
    created_at: "2024-12-07T10:30:00+07:00",
    updated_at: "2024-12-07T13:45:00+07:00",
    image: "https://placehold.co/1200x600/d946ef/ffffff?text=Email+Marketing",
    category: "การตลาด",
    tags: ["Email", "Marketing", "Conversion"],
    views: 1543,
    status: "published"
  },

  // การออกแบบ - 2 รายการ
  {
    id: 13,
    slug: "ui-ux-principles",
    title: "หลักการ UI/UX Design",
    description: "หลักการพื้นฐานสำหรับการออกแบบ User Interface และ User Experience",
    detail: `
      <p class="mb-4">UI/UX Design เป็นศิลปะและวิทยาศาสตร์ที่ผสมผสานกัน เพื่อสร้างประสบการณ์ที่ดีให้กับผู้ใช้</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">หลักการสำคัญ</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>ความเรียบง่าย (Simplicity)</li>
        <li>ความสอดคล้อง (Consistency)</li>
        <li>การตอบสนอง (Feedback)</li>
        <li>ความสามารถในการใช้งาน (Usability)</li>
      </ul>
    `,
    author: "ดีไซเนอร์ มืออาชีพ",
    created_at: "2024-12-10T08:00:00+07:00",
    updated_at: "2024-12-10T11:30:00+07:00",
    image: "https://placehold.co/1200x600/6366f1/ffffff?text=UI%2FUX",
    category: "การออกแบบ",
    tags: ["UI", "UX", "Design", "User Experience"],
    views: 2109,
    status: "published"
  },
  {
    id: 14,
    slug: "typography-basics",
    title: "พื้นฐานการใช้ Typography",
    description: "เลือกและใช้ฟอนต์อย่างไรให้สวยงามและอ่านง่าย",
    detail: `
      <p class="mb-4">Typography เป็นองค์ประกอบสำคัญของการออกแบบ การเลือกฟอนต์ที่เหมาะสมช่วยให้เนื้อหาอ่านง่ายและสื่อสารได้ดี</p>
      
      <h3 class="text-xl font-bold mb-3 mt-6">หลักการเลือกฟอนต์</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>ความชัดเจนในการอ่าน</li>
        <li>ความเหมาะสมกับแบรนด์</li>
        <li>การผสมผสานฟอนต์</li>
        <li>ขนาดและระยะห่างที่เหมาะสม</li>
      </ul>
    `,
    author: "ทัยโป กราฟิก",
    created_at: "2024-12-09T14:20:00+07:00",
    updated_at: "2024-12-09T17:00:00+07:00",
    image: "https://placehold.co/1200x600/0ea5e9/ffffff?text=Typography",
    category: "การออกแบบ",
    tags: ["Typography", "Fonts", "Design"],
    views: 1432,
    status: "published"
  }
];