import type { Content } from "../../types/content.ts";
import { formatDateTime } from "../../utils/date.ts";

export default async function ContentPage(req: Request): Promise<JSX.Element> {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop(); // ดึง slug จาก URL
  
  // Fetch from API
  const apiUrl = new URL(`/api/content/${slug}`, url.origin);
  
  let content: Content;
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Content not found');
    }
    
    content = await response.json();
  } catch (error) {
    return (
      <>
        <title>ไม่พบเนื้อหา | My Fresh App</title>
        
        <div class="min-h-[60vh] flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">404</h1>
            <p class="text-xl mb-4">ไม่พบเนื้อหาที่คุณต้องการ</p>
            <a href="/" class="btn btn-primary">กลับหน้าแรก</a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <title>{content.title} | My Fresh App</title>
      
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

            <div class="mb-4">
              <span class="badge badge-primary">{content.category}</span>
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

            <div class="alert alert-info mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{content.description}</span>
            </div>

            <div class="divider"></div>

            <div 
              class="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content.detail }}
            />

            <div class="divider"></div>

            <div class="text-sm opacity-60 mb-4">
              อัปเดตล่าสุด: {formatDateTime(content.updated_at)}
            </div>

            <div class="flex gap-4">
              <a href="/" class="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                กลับหน้าแรก
              </a>
              <button class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                แชร์
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}