export default function Home() {
  // Dummy data สำหรับ cards
  const dummyCards = [
    { id: 1, title: "การออกแบบเว็บไซต์สมัยใหม่", description: "เทคนิคและเครื่องมือสำหรับการออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย", image: "https://placehold.co/400x300/3b82f6/ffffff?text=Web+Design" },
    { id: 2, title: "พัฒนาแอปพลิเคชันมือถือ", description: "แนวทางการสร้างแอปมือถือที่มีประสิทธิภาพและประสบการณ์ผู้ใช้ที่ดี", image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Mobile+App" },
    { id: 3, title: "การตลาดดิจิทัล", description: "กลยุทธ์การตลาดออนไลน์ที่ช่วยเพิ่มยอดขายและสร้างแบรนด์", image: "https://placehold.co/400x300/ec4899/ffffff?text=Marketing" },
    { id: 4, title: "ความปลอดภัยทางไซเบอร์", description: "วิธีการปกป้องข้อมูลและระบบจากภัยคุกคามทางออนไลน์", image: "https://placehold.co/400x300/f59e0b/ffffff?text=Security" },
    { id: 5, title: "ปัญญาประดิษฐ์และ Machine Learning", description: "เทคโนโลยี AI ที่กำลังเปลี่ยนแปลงโลกธุรกิจและชีวิตประจำวัน", image: "https://placehold.co/400x300/10b981/ffffff?text=AI+%26+ML" },
    { id: 6, title: "Cloud Computing", description: "การใช้งานและประโยชน์ของระบบคลาวด์สำหรับธุรกิจ", image: "https://placehold.co/400x300/06b6d4/ffffff?text=Cloud" },
    { id: 7, title: "UX/UI Design", description: "หลักการออกแบบประสบการณ์และส่วนติดต่อผู้ใช้ที่ดี", image: "https://placehold.co/400x300/6366f1/ffffff?text=UX%2FUI" },
    { id: 8, title: "DevOps และ CI/CD", description: "ระบบอัตโนมัติสำหรับการพัฒนาและส่งมอบซอฟต์แวร์", image: "https://placehold.co/400x300/ef4444/ffffff?text=DevOps" },
    { id: 9, title: "Blockchain Technology", description: "เทคโนโลยีบล็อกเชนและการประยุกต์ใช้ในธุรกิจ", image: "https://placehold.co/400x300/a855f7/ffffff?text=Blockchain" },
    { id: 10, title: "Data Science และ Analytics", description: "การวิเคราะห์ข้อมูลเพื่อหาข้อมูลเชิงลึกทางธุรกิจ", image: "https://placehold.co/400x300/14b8a6/ffffff?text=Data+Science" },
    { id: 11, title: "Internet of Things (IoT)", description: "การเชื่อมต่ออุปกรณ์และสร้างระบบอัจฉริยะ", image: "https://placehold.co/400x300/f97316/ffffff?text=IoT" },
    { id: 12, title: "Progressive Web Apps", description: "การสร้างเว็บแอปที่ทำงานได้เหมือนแอปมือถือ", image: "https://placehold.co/400x300/84cc16/ffffff?text=PWA" },
    { id: 13, title: "Responsive Design", description: "การออกแบบเว็บไซต์ที่รองรับทุกขนาดหน้าจอ", image: "https://placehold.co/400x300/0ea5e9/ffffff?text=Responsive" },
    { id: 14, title: "SEO Optimization", description: "เทคนิคการทำ SEO เพื่อเพิ่มการมองเห็นบนเสิร์ชเอนจิ้น", image: "https://placehold.co/400x300/d946ef/ffffff?text=SEO" },
    { id: 15, title: "E-commerce Solutions", description: "แพลตฟอร์มและเครื่องมือสำหรับธุรกิจออนไลน์", image: "https://placehold.co/400x300/f43f5e/ffffff?text=E-commerce" },
    { id: 16, title: "API Development", description: "การพัฒนา API ที่มีประสิทธิภาพและปลอดภัย", image: "https://placehold.co/400x300/22c55e/ffffff?text=API" },
    { id: 17, title: "Microservices Architecture", description: "สถาปัตยกรรมไมโครเซอร์วิสสำหรับแอปพลิเคชันขนาดใหญ่", image: "https://placehold.co/400x300/eab308/ffffff?text=Microservices" },
    { id: 18, title: "Automated Testing", description: "การทดสอบอัตโนมัติเพื่อคุณภาพซอฟต์แวร์ที่ดี", image: "https://placehold.co/400x300/3b82f6/ffffff?text=Testing" },
    { id: 19, title: "Container Technology", description: "Docker และ Kubernetes สำหรับการจัดการแอปพลิเคชัน", image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Containers" },
    { id: 20, title: "Serverless Computing", description: "การพัฒนาแอปพลิเคชันแบบ Serverless ที่ประหยัดและยืดหยุ่น", image: "https://placehold.co/400x300/ec4899/ffffff?text=Serverless" },
  ];

  return (
    <>
      <title>หน้าแรก | My Fresh App</title>
      
      <div>
        {/* Header */}
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2">บทความและเนื้อหาแนะนำ</h1>
          <p class="text-lg opacity-70">สำรวจเนื้อหาที่น่าสนใจและเป็นประโยชน์</p>
        </div>

        {/* Cards Grid - 4 columns */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyCards.map((card) => (
            <div key={card.id} class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body p-4">
                <h2 class="card-title text-lg mb-2">{card.title}</h2>
                <p class="text-sm opacity-70 mb-4">{card.description}</p>
              </div>
              <figure>
                <img 
                  src={card.image} 
                  alt={card.title}
                  class="w-full h-48 object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}