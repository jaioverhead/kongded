import { define } from "../utils.ts";
import Header from "../components/Header.tsx";
import DrawerSidebar from "../islands/DrawerSidebar.tsx";
import Footer from "../components/Footer.tsx";

export default define.page((ctx) => {
  return (
    <html lang="th" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        
        {/* Basic Meta Tags */}
        <title>{ctx.state.title ?? "My Fresh App - เว็บไซต์ข่าวสารและบทความคุณภาพ"}</title>
        <meta name="description" content={ctx.state.description ?? "เว็บไซต์ข่าวสารและบทความคุณภาพ พร้อมเนื้อหาที่น่าสนใจและทันสมัย"} />
        <link rel="canonical" href={ctx.state.canonical ?? ctx.url.href} />
        <meta name="keywords" content={ctx.state.keywords ?? "ข่าวสาร, บทความ, เทคโนโลยี, ไลฟ์สไตล์, ความรู้"} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={ctx.state.ogType ?? "website"} />
        <meta property="og:title" content={ctx.state.title ?? "My Fresh App - เว็บไซต์ข่าวสารและบทความคุณภาพ"} />
        <meta property="og:description" content={ctx.state.description ?? "เว็บไซต์ข่าวสารและบทความคุณภาพ พร้อมเนื้อหาที่น่าสนใจและทันสมัย"} />
        <meta property="og:image" content={ctx.state.image ?? "/default-og-image.jpg"} />
        <meta property="og:url" content={ctx.state.url ?? ctx.url.href} />
        <meta property="og:site_name" content="My Fresh App" />
        
        {/* Article Meta Tags - แสดงเฉพาะเมื่อมีค่า */}
        {ctx.state.publishedTime && <meta property="article:published_time" content={ctx.state.publishedTime} />}
        {ctx.state.modifiedTime && <meta property="article:modified_time" content={ctx.state.modifiedTime} />}
        {ctx.state.author && <meta property="article:author" content={ctx.state.author} />}
        {ctx.state.category && <meta property="article:section" content={ctx.state.category} />}
        {ctx.state.tags?.map((tag: string) => (
          <meta key={`article-tag-${tag}`} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ctx.state.title ?? "My Fresh App - เว็บไซต์ข่าวสารและบทความคุณภาพ"} />
        <meta name="twitter:description" content={ctx.state.description ?? "เว็บไซต์ข่าวสารและบทความคุณภาพ พร้อมเนื้อหาที่น่าสนใจและทันสมัย"} />
        <meta name="twitter:image" content={ctx.state.image ?? "/default-og-image.jpg"} />

        {/* Additional SEO Meta Tags */}
        {ctx.state.author && <meta name="author" content={ctx.state.author} />}
      </head>
      
      <body class="min-h-screen flex flex-col">
        <DrawerSidebar>
          <Header />

          <main class="flex-1 p-6 bg-base-200 min-h-screen">
            <div class="container mx-auto">
              <ctx.Component />
            </div>
          </main>

          <Footer />
        </DrawerSidebar>
      </body>
    </html>
  );
});