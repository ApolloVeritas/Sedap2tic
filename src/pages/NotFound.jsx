export default function NotFound({ errorCode = 404 }) {
    const code = String(errorCode);
    
  let content = {
    title: "Error",
    description: "Terjadi kesalahan",
    image: "/public/img/404.png",
  };
  if (code === "404") {
    content = {
      title: "404 - Halaman Tidak Ditemukan",
      description: "Tidak ada apa-apa di sini",
      image: "/public/img/404.png",
    };
  } else if (code === "402") {
    content = {
      title: "402 - Pembayaran Diperlukan",
      description: "Halaman ini perlu melakukan pembayaran",
      image: "/public/img/402.png",
    };
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
    <img
      src={content.image}
      alt={content.title}
      className="w-64 h-auto mb-6"
    />
    <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
      {content.title}
    </h1>
    <p className="text-lg md:text-xl text-gray-700">
      {content.description}
    </p>
  </div>
  );
}
