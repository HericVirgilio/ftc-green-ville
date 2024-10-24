import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";
import { ComboboxDemo } from "@/components/ui/combobox-demo";

export default function HeaderTable(){
    return(
        <div className="flex justify-between items-center p-1">
        <span>
            <h5 
                className="font-bold text-xl"
            >Relatório de vendas</h5>
        </span>
        <span className="flex gap-8">
            <div className="relative">
                <Input
                    type="search"
                    className="bg-[#E7E7E7] placeholder-[#7E7E7E] text-[#131313] pr-10 w-[216px] h-[40px]"                                    placeholder="Buscar..."
                />
                <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                    <Search className="w-4 h-4 text-muted-foreground" />
                </span>
            </div>
            <ComboboxDemo/>
        </span>

    </div>
    )
}