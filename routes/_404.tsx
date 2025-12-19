import { Head } from "fresh/runtime";
import { PageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: PageProps) {
  return (
    <>
      <Head>
        <title>404 - ไม่พบหน้าที่คุณต้องการ | My Fresh App</title>
        <meta name="description" content="ขอโทษครับ ไม่พบหน้าที่คุณต้องการ" />
      </Head>

      <div class="min-h-[70vh] flex items-center justify-center">
        <div class="text-center max-w-md mx-auto px-4">
          {/* 404 Illustration */}
          <div class="mb-8">
            <svg class="w-64 h-64 mx-auto text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>

          {/* Error Message */}
          <h1 class="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">ไม่พบหน้าที่คุณต้องการ</h2>
          <p class="text-base-content/70 mb-8">
            ขอโทษครับ หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง
          </p>

          {/* Helpful Links */}
          <div class="divider my-8">หรือลองดูหน้าเหล่านี้</div>
          
          <div class="grid grid-cols-2 gap-4 text-sm">
            <a href="/" class="link link-hover">หน้าแรก</a>
            <a href="/about" class="link link-hover">เกี่ยวกับเรา</a>
            <a href="/#" class="link link-hover">บทความทั้งหมด</a>
            <a href="/#" class="link link-hover">ติดต่อเรา</a>
          </div>
        </div>
      </div>
    </>
  );
}