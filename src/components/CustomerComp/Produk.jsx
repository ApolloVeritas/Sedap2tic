export default function Produk() {
  // Data produk contoh
  const products = [
    {
      id: 1,
      name: "Nasi Goreng Spesial",
      price: 25000,
      description: "Nasi goreng dengan campuran seafood dan bumbu rahasia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaq48ERY2bULt0YWoYpemsl5yDlZ2n6o3QFQ&s",
    },
    {
      id: 2,
      name: "Mie Ayam Jamur",
      price: 20000,
      description: "Mie ayam dengan jamur pilihan dan kuah kaldu ayam",
      image:
        "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1778837789-500x300.jpg",
    },
    {
      id: 3,
      name: "Sate Ayam",
      price: 30000,
      description: "Sate ayam dengan bumbu kacang dan lontong",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg.webp",
    },
    {
      id: 4,
      name: "Es Teh Manis",
      price: 5000,
      description: "Es teh dengan gula aren asli",
      image:
        "https://asset.kompas.com/crops/9iB_ruTEMU7otPYnbCNVng8zhrQ=/0x0:4939x3293/1200x800/data/photo/2022/09/25/63300cfd403f0.jpg",
    },
  ];

  return (
    <div className=" bg-gray-100">
      {/* Konten Produk */}
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Menu Kami
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 group"
            >
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-hijau">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <button className="bg-hijau hover:bg-hijau-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
