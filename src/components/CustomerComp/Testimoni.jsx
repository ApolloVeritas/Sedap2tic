import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

export default function Testimoni() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pelanggan Setia",
      rating: 5,
      comment:
        "Nasi Goreng Spesial di Sedap adalah yang terbaik di kota ini! Rasanya autentik dan bahan-bahannya segar.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVoZckm2I0yHpktrBI9ZnFqweIfG7Da7cqA&s",
      date: "15 Januari 2023",
    },
    {
      id: 2,
      name: "Anita Wijaya",
      role: "Food Blogger",
      rating: 4,
      comment:
        "Atmosfernya nyaman dan pelayanannya ramah. Sate ayamnya juicy dengan bumbu kacang yang sempurna.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVoZckm2I0yHpktrBI9ZnFqweIfG7Da7cqA&s",
      date: "2 Maret 2023",
    },
    {
      id: 3,
      name: "Rudi Hartono",
      role: "Karyawan Kantoran",
      rating: 5,
      comment:
        "Tempat favorit saya untuk makan siang. Paket hematnya benar-benar worth it dengan porsi yang besar!",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVoZckm2I0yHpktrBI9ZnFqweIfG7Da7cqA&s",
      date: "28 April 2023",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Ibu Rumah Tangga",
      rating: 5,
      comment:
        "Anak-anak saya sangat suka mie ayam jamurnya. Sekarang jadi tempat wajib kami setiap minggu.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVoZckm2I0yHpktrBI9ZnFqweIfG7Da7cqA&s",
      date: "10 Mei 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Testimonial Content */}
      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Apa Kata Mereka?
          </h1>
          <div className="w-24 h-1 bg-hijau mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman pelanggan kami yang telah menikmati hidangan di
            Sedap
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-hijau">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/testimonials/default.jpg";
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } text-xl`}
                  />
                ))}
              </div>

              <div className="relative mb-4">

                <p className="text-gray-600 italic pl-6">
                  {testimonial.comment}
                </p>

              </div>

              <p className="text-gray-400 text-sm text-right">
                {testimonial.date}
              </p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Beri Kami Testimoni
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Nama Anda</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hijau"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-gray-300 text-2xl cursor-pointer hover:text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Testimoni</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hijau"
                rows="4"
                placeholder="Bagikan pengalaman Anda..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-hijau hover:bg-hijau-dark text-white px-6 py-2 rounded-md transition-colors duration-200"
              >
                Kirim Testimoni
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
