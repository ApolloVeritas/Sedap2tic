import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import ProductList from "./ProdukListSearchFilter";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
createRoot(document.getElementById("root"))
    .render(
        <div>
            <ProductList/>
            {/* <FrameworkListSearchFilter/> */}
            {/* <FrameworkList/> */}
        </div>
    )