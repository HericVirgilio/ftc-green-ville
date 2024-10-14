"use cliente"
import Produtos from "@/components/produtos";
import HeaderSearch from "@/components/header-search";
import Footer from "@/components/footer";

export default function Inicio() {

    return (
        <div className="w-[80vw] m-auto mt-[3%] text-lg font-semibold">
            
            <HeaderSearch/>

            <hr className="border-t border-[#393C49] mb-[2%]" />

            <Produtos/>

            <hr className="border-t border-[#393C49]  mt-[2%]" />

            <Footer/>
        </div>
    )
}