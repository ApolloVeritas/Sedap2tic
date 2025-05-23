import { BiErrorAlt } from "react-icons/bi"; 
import { BiErrorCircle } from "react-icons/bi"; 
import { ImUsers } from "react-icons/im"; 
import { IoMdList } from "react-icons/io"; 
import { MdDashboard } from "react-icons/md"; 
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink
            id="menu-1"
            to="/"
            className={menuClass}
          >
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-2"
            to="/orders"
            className={menuClass}
          >
            <IoMdList className="mr-4 text-xl" />
           Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/customers"
            className={menuClass}
          >
            <ImUsers className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/users"
            className={menuClass}
          >
            <ImUsers className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-4"
            to="/404"
            className={menuClass}
          >
            <BiErrorCircle className="mr-4 text-xl" />
            Erro 404
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-5"
            to="/402"
            className={menuClass}
          >
            <BiErrorAlt className="mr-4 text-xl" />
            Erro 402
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
