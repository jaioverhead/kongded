import { LayoutProps } from "$fresh/server.ts"; 
import Header from "../components/Header.tsx";
import DrawerSidebar from "../islands/DrawerSidebar.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component, state }: LayoutProps) {
  return (
    <html lang="th" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body class="min-h-screen flex flex-col">
        <DrawerSidebar>
          <Header />
          
          <main class="flex-1 p-6 bg-base-200">
            <Component />
          </main>
          
          <Footer />
        </DrawerSidebar>
      </body>
    </html>
  );
}