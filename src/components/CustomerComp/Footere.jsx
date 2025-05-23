import { FaHome, FaPhone, FaEnvelope, FaAngleDoubleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      {/* Tombol go-top */}
      <div className="text-center mb-6">
        <a
          href="#top"
          className="inline-block text-hijau text-2xl hover:text-green-400 transition"
        >
          <FaAngleDoubleUp />
        </a>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Store */}
          
          <div>
            <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-100 hover:text-hijau transition-colors duration-200"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
            <h4 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
              Tentang Toko
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <FaHome className="text-hijau mr-2 mt-1" />
                234 Heaven Street, Beverly Hill.
              </li>
              <li className="flex items-start">
                <FaPhone className="text-hijau mr-2 mt-1" />
                (800) 123 456 789
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-hijau mr-2 mt-1" />
                <a
                  href="mailto:contact@erentheme.com"
                  className="hover:underline"
                >
                  contact@erentheme.com
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
              Akun Saya
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Akun Saya",
                "Login",
                "Keranjang",
                "Wishlist",
                "Checkout",
                "Info Pengguna",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-hijau transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
              Informasi
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Tentang Kami",
                "Cara Belanja",
                "Pembayaran",
                "Pengiriman",
                "FAQ",
                "Kontak",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-hijau transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
              Layanan Pelanggan
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Reservasi Meja",
                "Kebijakan Pembatalan",
                "Layanan Antar & Pesan",
                "Menu Spesial & Promo",
                "Pertanyaan Umum (FAQ)",
                "Hubungi Kami",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-hijau transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sedap Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
