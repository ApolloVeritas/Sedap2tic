import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // ubah nilai scroll sesuai kebutuhan
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="header-container"
      className={`fixed top-0 left-0 z-40 w-full shadow-md bg-gray-800 flex justify-between items-center p-4 transition-all duration-300 ${
        scrolled ? "pt-5" : "pt-10"
      }`}
    >
      {/* Logo - Left Side */}
      <NavLink
        to="/Guest"
        className="hover:scale-105 transition-transform duration-200"
      >
        <span
          id="logo-title"
          className="font-poppins-extrabold text-[48px] text-gray-100 hover:text-hijau transition-colors duration-200"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
      </NavLink>

      {/* Right Side */}
      <div id="icons-container" className="flex items-center space-x-4">
        <NavLink
          to="/testimoni"
          className={({ isActive }) =>
            `text-white font-barlow-regular text-[24px] hover:text-hijau hover:underline transition-colors duration-200 ${
              isActive ? "font-bold underline text-hijau" : ""
            }`
          }
        >
          AboutUs
        </NavLink>

        <NavLink
          to="/Guest/menu"
          className={({ isActive }) =>
            `text-white font-barlow-regular text-[24px] hover:text-hijau hover:underline transition-colors duration-200 ${
              isActive ? "font-bold underline text-hijau" : ""
            }`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/Guest/menu"
          className={({ isActive }) =>
            `text-white font-barlow-regular text-[24px] hover:text-hijau hover:underline transition-colors duration-200 ${
              isActive ? "font-bold underline text-hijau" : ""
            }`
          }
        >
          Testimoni
        </NavLink>
        <NavLink
          to="Guest/member"
          className={({ isActive }) =>
            `text-white font-barlow-regular text-[24px] hover:text-hijau hover:underline transition-colors duration-200 ${
              isActive ? "font-bold underline text-hijau" : ""
            }`
          }
        >
          Member
        </NavLink>
        <NavLink
          to="/cart"
          className="hover:scale-110 transition-transform duration-200"
        >
          <AiOutlineShoppingCart
            size={30}
            color="white"
            className="hover:text-hijau"
          />
        </NavLink>

        <div
          id="profile-container"
          className="flex items-center space-x-4 border-l pl-4 border-gray-300"
        >
          <NavLink
            to="/search"
            className="hover:scale-110 transition-transform duration-200"
          >
            <BiSearchAlt2
              size={30}
              color="white"
              className="hover:text-hijau"
            />
          </NavLink>
        </div>
        
      </div>
    </div>
  );
}
