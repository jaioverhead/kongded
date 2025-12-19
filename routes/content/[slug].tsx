import { Head } from "fresh/runtime";
import type { Content } from "../../types/content.ts";
import { formatDateTime } from "../../utils/date.ts";
import ShareButtons from "../../islands/ShareButtons.tsx";
import ContentCard from "../../components/ContentCard.tsx";
import { define } from "../../utils.ts";
import NotFoundPage from "../_404.tsx";

export const handler = define.handlers({
  async GET(ctx) {
    const req = ctx.req;
    const url = new URL(req.url);
    const slug = url.pathname.split('/').pop();
    
    const apiUrl = new URL(`/api/content/${slug}`, url.origin);
    
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        return {
          data: { notFound: true, url: url.href },
          status: 404
        };
        //return new Response(null, { status: 404 });
      }
      
      const content = await response.json();
      
      // Fetch related content
      const relatedApiUrl = new URL(`/api/content/category/${content.category}`, url.origin);
      let relatedContents: Content[] = [];
      
      try {
        const relatedResponse = await fetch(relatedApiUrl);
        if (relatedResponse.ok) {
          const responseData = await relatedResponse.json();
          const allRelated = Array.isArray(responseData) 
            ? responseData 
            : (responseData.data || []);
          const filtered = allRelated.filter((c: Content) => c.slug !== content.slug);
          relatedContents = filtered.sort(() => Math.random() - 0.5).slice(0, 3);
        }
      } catch (error) {
        console.error('Failed to fetch related content:', error);
      }
      
      // Return data และ head สำหรับ Fresh 2.x
      return {
        data: { content, relatedContents, url: url.href }
      };
    } catch (error) {
        console.error(error);
        return {
          data: { notFound: true, url: url.href },
          status: 404
        };
    }
  }
});

export default define.page(function ContentPage({ data }) {

  if (data.notFound) {
    return <NotFoundPage url={data.url} />;
  }
  const { content, relatedContents, url } = data;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{content.title} | My Fresh App</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={url} />
        
        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:image" content={content.image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="My Fresh App" />
        <meta property="article:published_time" content={content.created_at} />
        <meta property="article:modified_time" content={content.updated_at} />
        <meta property="article:author" content={content.author} />
        <meta property="article:section" content={content.category} />
        {content.tags.map((tag: string) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={content.image} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content={content.author} />
        <meta name="keywords" content={content.tags.join(', ')} />
      </Head>
    <div class="min-h-[60vh]">
      <div class="mb-8 -mx-6 -mt-6">
        <img 
          src={content.image} 
          alt={content.title}
          class="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="text-sm breadcrumbs mb-4">
            <ul>
              <li><a href="/">หน้าแรก</a></li>
              <li><a href="/#">เนื้อหา</a></li>
              <li>{content.title}</li>
            </ul>
          </div>

          <div class="flex justify-between items-center mb-6">
            <span class="badge badge-primary">{content.category}</span>
            <ShareButtons title={content.title} url={url} />
          </div>

          <h1 class="text-3xl md:text-4xl font-bold mb-4">{content.title}</h1>
          
          <div class="flex flex-wrap gap-4 text-sm opacity-70 mb-4">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{content.author}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDateTime(content.created_at)}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{content.views.toLocaleString()} ครั้ง</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-6">
            {content.tags.map((tag) => (
              <span key={tag} class="badge badge-outline">{tag}</span>
            ))}
          </div>

          <div class="divider"></div>

          <div 
            class="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content.detail }}
          />

          <div class="divider"></div>

          <div class="flex justify-between items-center mb-6">
            <div class="text-sm opacity-60">
              อัปเดตล่าสุด: {formatDateTime(content.updated_at)}
            </div>
            <ShareButtons title={content.title} url={url} />
          </div>

          {relatedContents.length > 0 && (
            <>
              <div class="divider"></div>
              
              <h2 class="text-2xl font-bold mb-4">เนื้อหาที่เกี่ยวข้อง</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedContents.map((related) => (
                  <ContentCard content={related} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
});