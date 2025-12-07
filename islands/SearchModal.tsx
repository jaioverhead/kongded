import { signal } from "@preact/signals";
import { useRef } from "preact/hooks";

const isModalOpen = signal(false);
const searchQuery = signal("");

export default function SearchModal() {
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    isModalOpen.value = true;
    // Focus input หลัง modal เปิด
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const closeModal = () => {
    isModalOpen.value = false;
    searchQuery.value = "";
  };

  const handleSearch = (e: Event) => {
    e.preventDefault();
    if (searchQuery.value.trim()) {
      console.log("ค้นหา:", searchQuery.value);
      // TODO: นำไปหน้าผลการค้นหา
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery.value)}`;
      alert(`กำลังค้นหา: ${searchQuery.value}`);
      closeModal();
    }
  };

  return (
    <>
      {/* Search Button */}
      <button 
        class="btn btn-ghost btn-circle"
        onClick={openModal}
        aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Modal */}
      <input type="checkbox" id="search-modal" class="modal-toggle" checked={isModalOpen.value} />
      <div class="modal modal-bottom sm:modal-middle" onClick={closeModal}>
        <div class="modal-box" onClick={(e) => e.stopPropagation()}>
          <h3 class="font-bold text-lg mb-4">ค้นหา</h3>
          
          <form onSubmit={handleSearch}>
            <div class="join w-full">
              <input 
                ref={inputRef}
                type="text" 
                placeholder="พิมพ์คำค้นหา..." 
                class="input input-bordered join-item flex-1"
                value={searchQuery.value}
                onInput={(e) => searchQuery.value = (e.target as HTMLInputElement).value}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    closeModal();
                  }
                }}
              />
              <button type="submit" class="btn btn-primary join-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                ค้นหา
              </button>
            </div>
          </form>
        </div>
        <label class="modal-backdrop" onClick={closeModal}></label>
      </div>
    </>
  );
}