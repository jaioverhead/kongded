import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const cards = useSignal<Card[]>([]);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        cards.value = data;
        loading.value = false;
      })
      .catch((err) => {
        error.value = err.message;
        loading.value = false;
      });
  }, []);

  return (
    <>
      <title>หน้าแรก | My Fresh App</title>
      
      <div>
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2">บทความและเนื้อหาแนะนำ</h1>
          <p class="text-lg opacity-70">สำรวจเนื้อหาที่น่าสนใจและเป็นประโยชน์</p>
        </div>

        {loading.value && (
          <div class="flex justify-center items-center min-h-[400px]">
            <span class="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error.value && (
          <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>เกิดข้อผิดพลาด: {error.value}</span>
          </div>
        )}

        {!loading.value && !error.value && (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.value.map((card) => (
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
        )}
      </div>
    </>
  );
}