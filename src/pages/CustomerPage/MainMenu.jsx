import About from "../../components/CustomerComp/About"
import Hero from "../../components/CustomerComp/Hero"
import Produk from "../../components/CustomerComp/Produk"
import Testimoni from "../../components/CustomerComp/Testimoni"
export default function MainMenu(){
    return(
        <div>
            <Hero />
            <About/>
            <Produk/>
            <Testimoni/>
        </div>
    )
}