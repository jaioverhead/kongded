import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const isDark = signal(false);

export default function ThemeToggle() {
  useEffect(() => {
    // โหลด theme จาก localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDark.value = true;
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    const theme = isDark.value ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <button 
      class="btn btn-ghost btn-circle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark.value ? (
        // Sun icon (Light mode)
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon (Dark mode)
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}