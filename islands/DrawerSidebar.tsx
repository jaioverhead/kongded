import { ComponentChildren } from "preact";
import Sidebar from "../components/Sidebar.tsx";

interface DrawerSidebarProps {
  children: ComponentChildren;
}

export default function DrawerSidebar({ children }: DrawerSidebarProps) {
  return (
    <div class="drawer">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      
      {/* Main Content */}
      <div class="drawer-content flex flex-col">
        {children}
      </div>
      
      {/* Sidebar */}
      <div class="drawer-side z-40">
        <label htmlFor="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="min-h-full w-64 bg-base-100 shadow-xl">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}