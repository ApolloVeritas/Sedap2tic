import {
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import aboutData from "../../About-data.json";

export default function AboutUs() {
  const { restaurant, vision_mission, team, contact } = aboutData;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      {/* Konten Tentang Kami */}
      <main className="container mx-auto py-12 px-4">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tentang {restaurant.name}
          </h1>
          <div className="w-24 h-1 bg-hijau mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {restaurant.description}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Visi Kami</h2>
            <p className="text-lg text-gray-600 mb-6">
              Menjadi restoran keluarga terbaik yang menyajikan pengalaman
              kuliner tak terlupakan dengan memadukan resep tradisional dan
              inovasi modern.
            </p>
            <div className="flex items-center space-x-2 text-hijau">
              <BiLeaf size={24} />
              <span className="font-semibold">100% Bahan Alami</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Misi Kami</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-hijau font-bold mr-2">✓</span>
                <span className="text-gray-600">
                  Menyajikan makanan berkualitas dengan harga terjangkau
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-hijau font-bold mr-2">✓</span>
                <span className="text-gray-600">
                  Menjaga konsistensi rasa di setiap hidangan
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-hijau font-bold mr-2">✓</span>
                <span className="text-gray-600">
                  Memberikan pelayanan terbaik kepada pelanggan
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-hijau font-bold mr-2">✓</span>
                <span className="text-gray-600">
                  Mendukung petani dan produsen lokal
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Tim Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-78 overflow-hidden relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{member.bio}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-hijau transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-hijau font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Kunjungi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <AiOutlineEnvironment className="text-hijau text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Lokasi
                  </h3>
                  <p className="text-gray-600">
                    Jl. Rasa Sedap No. 123, Kota Kuliner, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AiOutlineClockCircle className="text-hijau text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Jam Operasional
                  </h3>
                  <p className="text-gray-600">
                    Senin - Minggu: 10.00 - 22.00 WIB
                  </p>
                  <p className="text-gray-600">
                    Sabtu - Minggu: 09.00 - 23.00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AiOutlinePhone className="text-hijau text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Kontak
                  </h3>
                  <p className="text-gray-600">Telepon: (021) 1234-5678</p>
                  <p className="text-gray-600">WhatsApp: 0812-3456-7890</p>
                  <p className="text-gray-600">Email: info@sedap.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-64 w-full">
              <iframe
                title="Lokasi Sedap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.86905336514!2d106.68943111226334!3d-6.229728002865735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f3d456d611%3A0xf4c4c4f4e4f4f4f4!2sKota%20Kuliner!5e0!3m2!1sid!2sid!4v1626352211222!5m2!1sid!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
    </div>
  );
}
