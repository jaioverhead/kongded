import { LayoutProps } from "$fresh/server.ts"; 
import Header from "../components/Header.tsx";
import DrawerSidebar from "../islands/DrawerSidebar.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component, state }: LayoutProps) {
  // ดึงข้อมูล meta จาก state (ที่ส่งมาจาก routes)
  const title = state?.title || "My Fresh App";
  const description = state?.description || "เว็บไซต์ข่าวสารและบทความคุณภาพ";
  const image = state?.image || "/default-og-image.jpg";
  const url = state?.url || "";
  const canonical = state?.canonical || "";
  const ogType = state?.ogType || "website";
  const author = state?.author || "";
  const publishedTime = state?.publishedTime || "";
  const modifiedTime = state?.modifiedTime || "";
  const category = state?.category || "";
  const tags = state?.tags || [];

  return (
    <html lang="th" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:site_name" content="My Fresh App" />
        
        {/* Article-specific OG tags */}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {author && <meta property="article:author" content={author} />}
        {category && <meta property="article:section" content={category} />}
        {tags.map((tag: string) => (
          <meta key={`og-tag-${tag}`} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Additional SEO Meta Tags */}
        {author && <meta name="author" content={author} />}
        {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
      </head>
      
      <body class="min-h-screen flex flex-col">
        <DrawerSidebar>
          <Header />

          <main class="flex-1 p-6 bg-base-200 min-h-screen">
            <div class="container mx-auto">
              <Component />
            </div>
          </main>

          <Footer />
        </DrawerSidebar>
      </body>
    </html>
  );
}