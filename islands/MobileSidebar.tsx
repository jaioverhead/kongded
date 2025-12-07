import { ComponentChildren } from "preact";
import Sidebar from "../components/Sidebar.tsx";

interface MobileSidebarProps {
  children: ComponentChildren;
}

export default function MobileSidebar({ children }: MobileSidebarProps) {
  return (
    <div class="drawer drawer-end lg:drawer-open">
      <input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
      
      {/* Main Content */}
      <div class="drawer-content flex flex-col">
        {children}
      </div>
      
      {/* Mobile Sidebar - แสดงเฉพาะเมื่อเปิด drawer */}
      <div class="drawer-side z-40 lg:hidden">
        <label htmlFor="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="min-h-full w-64 bg-base-100 shadow-xl">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}