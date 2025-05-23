import { useEffect, useState } from "react";

export default function HeaderAccount() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-100 text-gray-800 text-sm px-4 py-2 flex justify-between items-center transition-all duration-300 z-50 w-full font-montserrat-black ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
      style={{ position: "fixed", top: 0, left: 0 }}
    >
      <div className="flex items-center gap-4">
        <span>Selamat datang di Sedap!</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="/login" className="hover:text-green-500 transition">
          Masuk
        </a>
        <span className="text-gray-400">|</span>
        <a href="/register" className="hover:text-green-500 transition">
          Daftar
        </a>
      </div>
    </div>
  );
}
