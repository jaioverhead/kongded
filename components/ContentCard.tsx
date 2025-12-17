import type { Content } from "../types/content.ts";

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <a 
      key={content.id}
      href={`/content/${content.slug}`}
      class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
    >
      <figure>
        <img 
          src={content.image} 
          alt={content.title}
          class="w-full h-40 object-cover"
        />
      </figure>
      <div class="card-body p-4">
        <h3 class="card-title text-base">{content.title}</h3>
        <p class="text-sm opacity-70 line-clamp-2">{content.description}</p>
        <div class="flex items-center gap-2 text-xs opacity-60 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{content.views.toLocaleString()} ครั้ง</span>
        </div>
      </div>
    </a>
  );
}