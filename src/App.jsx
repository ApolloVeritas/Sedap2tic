
import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import Loading from "./components/Loading";
import ErrorLayout from "./layouts/ErrorLayout";
import Users from "./pages/users";
import Produk from "./components/CustomerComp/Produk";
import Testimoni from "./components/CustomerComp/Testimoni";
import AboutUs from "./components/CustomerComp/About";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customer";
// import NotFound from "./pages/NotFound";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Forgot from "./pages/Auth/Forgot";
// import AuthLayout from "./layouts/AuthLayout";
const Dashboard = React.lazy(()=> import("./pages/Dashboard"))
const Customers = React.lazy(()=> import("./pages/Customer"))
const Products = React.lazy(()=> import("./pages/Products"))
const Orders = React.lazy(()=> import("./pages/Orders"))
const NotFound = React.lazy(()=> import("./pages/NotFound")) 
const MainLayout = React.lazy(()=> import("./layouts/MainLayout")) 
const Register = React.lazy(()=> import("./pages/Auth/Register")) 
const Forgot = React.lazy(()=> import("./pages/Auth/Forgot")) 
const Login = React.lazy(()=> import("./pages/Auth/Login")) 
const AuthLayout = React.lazy(()=> import("./layouts/AuthLayout")) 
const CustomerLayout = React.lazy(()=>import("./layouts/LayoutCustomer/CustomerLayout"))
const MainMenu = React.lazy(()=>import("./pages/CustomerPage/MainMenu"))
const Member = React.lazy(()=>import("./pages/CustomerPage/MemberPage"))
const ProductDetail = React.lazy(()=>import("./components/ProductDetail"))
function App() {
  return (
    <Suspense fallback={<Loading/>}>
          <Routes>
            <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            <Route path="/404" element={<NotFound errorCode="404"/>}></Route>
            <Route path="/402" element={<NotFound errorCode="402"/>}></Route>
            </Route>
            <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            </Route>
            <Route element={<ErrorLayout/>}>
            <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<CustomerLayout/>}>
            <Route path="/Guest" element={<MainMenu/>}/>
            <Route path="/Guest/menu" element={<Produk/>}/>
            <Route path="/Guest/member" element={<Member/>}/>
            <Route path="/Guest/Testimoni" element={<Testimoni/>}/>
            <Route path="/Guest/aboutus" element={<AboutUs/>}/>
            </Route>
          </Routes>
          </Suspense>
  );
}

export default App;
