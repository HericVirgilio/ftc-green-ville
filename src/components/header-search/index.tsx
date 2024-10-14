import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

export default function HeaderSearch(){

    const dataHoje = new Date();
    const dataFormatada = dataHoje.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
    });


    return(
        <header className="flex justify-between  mb-[3%]">
                <div>
                    <h1 className="text-2xl">#0005</h1>
                    <h5 className="font-normal text-base">{dataFormatada}</h5>
                </div>
                <div className="relative mt-4 w-[307px] h-[39px]">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="w-4 h-4 text-muted-foreground" />
                    </span>
                    <Input
                        type="search"
                        className="pl-10 bg-[#252525]"
                        placeholder="Buscar..."
                    />
                </div>
            </header>
    )
}