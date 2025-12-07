export default function About() {
  return (
    <>
      <title>เกี่ยวกับเรา | My Fresh App</title>
      
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl">เกี่ยวกับเรา</h2>
          <p class="text-lg">
            สังเกตว่า title ใน browser tab เปลี่ยนเป็น "เกี่ยวกับเรา | My Fresh App" แล้ว
          </p>
          <div class="alert alert-info mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Layout ปรับเป็นแบบ Desktop ที่มีเมนูใน navbar และ Container ครอบเนื้อหา</span>
          </div>
        </div>
      </div>
    </>
  );
}