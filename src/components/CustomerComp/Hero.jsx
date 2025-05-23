export default function Hero() {
  return (
    <section className="bg-gray-800 text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nikmati Hidangan <span className="text-green-500">Lezat</span> Setiap Hari
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Jelajahi berbagai menu pilihan dengan cita rasa khas dari dapur kami.
          </p>
          <a
            href="/Guest/menu"
            className="inline-block bg-green-500 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg 
            hover:bg-green-600 active:bg-green-700 transition"
          >
            Lihat Menu
          </a>
        </div>

        {/* Gambar */}
        <div className="flex-1">
          <img
            src="/public/img/menu.jpg" 
            alt="Ilustrasi makanan lezat"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
