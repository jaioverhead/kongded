export default function Footer() {
  return (
    <footer class="footer bg-base-300 text-base-content p-6">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Copyright */}
        <aside class="text-center md:text-left">
          <p>© {new Date().getFullYear()} - All rights reserved by My Company</p>
        </aside>
        
        {/* Right - Navigation Menu */}
        <nav class="flex flex-wrap justify-center md:justify-end gap-6">
          <a href="/" class="link link-hover">หน้าแรก</a>
          <a href="/about" class="link link-hover">เกี่ยวกับเรา</a>
          <a href="/contact" class="link link-hover">ติดต่อเรา</a>
          <a href="/cookies" class="link link-hover">นโยบายคุกกี้</a>
        </nav>
      </div>
    </footer>
  );
}