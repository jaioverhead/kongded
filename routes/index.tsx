import { Handlers, PageProps } from "$fresh/server.ts";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const handler: Handlers<Card[]> = {
  async GET(_req, ctx) {
    // Fetch จาก API ฝั่ง server
    const url = new URL("http://127.0.0.1:5173/api/cards", _req.url);
    const response = await fetch(url);
    const cards = await response.json();
    
    return ctx.render(cards);
  },
};

export default function Home({ data }: PageProps<Card[]>) {
  return (
    <>
      <title>หน้าแรก | My Fresh App</title>
      
      <div>
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2">บทความและเนื้อหาแนะนำ</h1>
          <p class="text-lg opacity-70">สำรวจเนื้อหาที่น่าสนใจและเป็นประโยชน์</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((card) => (
            <div key={card.id} class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body p-4">
                <h2 class="card-title text-lg mb-2">{card.title}</h2>
                <p class="text-sm opacity-70 mb-4">{card.description}</p>
              </div>
              <figure>
                <img 
                  src={card.image} 
                  alt={card.title}
                  class="w-full h-48 object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}