"use client";
import React, { useState } from "react";
import Produtos from "@/components/produtos";
import HeaderSearch from "@/components/header-search";
import Footer from "@/components/footer";
import MetodoPagamento from "@/components/metodo-pagamento";
import Chatwoot from "@/components/chat";

export default function Inicio() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleDiv = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="w-[80vw] m-auto mt-[3%] text-lg font-semibold">
            <HeaderSearch />

            <hr className="border-t border-[#393C49] mb-[2%]" onClick={toggleDiv} />

            <MetodoPagamento isVisible={isVisible} toggleDiv={toggleDiv} />

            <Produtos />

            <hr className="border-t border-[#393C49] mt-[2%]" />

            <Footer onSubmit={toggleDiv} />
            <Chatwoot/>
        </div>
    );
}
