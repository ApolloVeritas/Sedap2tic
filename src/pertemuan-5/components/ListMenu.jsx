import { ImUsers } from "react-icons/im"; 
import { IoMdList } from "react-icons/io"; 
import { MdDashboard } from "react-icons/md"; 
export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
             p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </div>
        </li>
        <li>
          <div
            id="menu-2"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
             p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <IoMdList className="mr-4 text-xl" />
            Orders
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl 
             p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <ImUsers className="mr-4 text-xl" />
            Customers
          </div>
        </li>
      </ul>
    </div>
  );
}
