import { Outlet } from "react-router-dom";
import Header from "../../components/CustomerComp/Header";
import HeaderAccount from "../../components/CustomerComp/HeaderAcc";
import Footere from "../../components/CustomerComp/Footere";
export default function MainLayout() {
  return (
    <div className="w-full ">
        <HeaderAccount/>
        <Header />
         <main className="pt-[80px]">
        <Outlet />
        <Footere/>
        </main>
      
    </div>
  );
}
