import MenuToggle from "../islands/MenuToggle.tsx";
import SearchModal from "../islands/SearchModal.tsx";
import ThemeToggle from "../islands/ThemeToggle.tsx";

export default function Header() {
  return (
    <div class="sticky top-0 z-50">
      <div class="navbar bg-base-100 shadow-md">
        <div class="container mx-auto">
          {/* Left - Menu Icon (Mobile/Tablet only) + Logo */}
          <div class="navbar-start">
            {/* Hamburger Menu - แสดงเฉพาะ Mobile/Tablet */}
            <MenuToggle />
            
            {/* Logo */}
            <a href="/" class="btn btn-ghost text-xl font-bold">
              🚀 MY LOGO
            </a>
          </div>

          {/* Center - Empty */}
          <div class="navbar-center">
          </div>

          {/* Right - Social Icons (Desktop) + Theme Toggle + Search */}
          <div class="navbar-end gap-2">
            {/* Social Media Icons - Desktop only */}
            <div class="hidden lg:flex gap-2">
              <a href="https://facebook.com" target="_blank" class="btn btn-ghost btn-circle btn-sm" aria-label="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a href="https://twitter.com" target="_blank" class="btn btn-ghost btn-circle btn-sm" aria-label="Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              <a href="https://youtube.com" target="_blank" class="btn btn-ghost btn-circle btn-sm" aria-label="YouTube">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a href="https://tiktok.com" target="_blank" class="btn btn-ghost btn-circle btn-sm" aria-label="TikTok">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>

            {/* Theme Toggle - ทุกขนาดหน้าจอ */}
            <ThemeToggle />

            {/* Search Modal - ทุกขนาดหน้าจอ */}
            <SearchModal />
          </div>
        </div>
      </div>
      
      {/* Colorful Border - Full Width */}
      <div class="flex h-1">
        <div class="flex-1 bg-error"></div>
        <div class="flex-1 bg-warning"></div>
        <div class="flex-1 bg-accent"></div>
        <div class="flex-1 bg-secondary"></div>
        <div class="flex-1 bg-success"></div>
        <div class="flex-1 bg-info"></div>
      </div>
    </div>
  );
}