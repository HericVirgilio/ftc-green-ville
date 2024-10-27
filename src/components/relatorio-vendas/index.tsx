import { relatorioVendasData } from "@/data/relatorio-vendas.data"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function RelatorioVendas() {
    return (
        <div className="w-[100%] h-[1000px] mt-[30px]">
            {relatorioVendasData.map((objeto, index) => (
                <div className="grid grid-cols-2 p-[20px] mb-[20px] bg-[#252525] rounded-2xl" key={index}>
                    <div className="grid items-center">
                        <div className="text-xl font-bold">Código de venda: {objeto.num_venda}</div>
                        <div><span className="font-bold text-xs">Descrição</span>: {objeto.descricao}</div>
                        <div><span className="font-bold text-xs">Quant. total de produtos:</span>  {objeto.quant_produto}</div>
                        <div><span className="font-bold text-xs">Data e hora:</span> {objeto.dataAndHora}</div>
                        <div><span className="font-bold text-xs">Valor total:</span> {objeto.valor_total}</div>
                    </div>
                    <div className="grid justify-end">
                        <div className="grid items-end">
                            <AlertDialog>
                                <AlertDialogTrigger className="bg-[#88000A] text-[#fff] rounded-xl w-[88px] h-[35px] flex justify-center items-center">Apagar</AlertDialogTrigger>
                                <AlertDialogContent style={{
                                    background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
                                    border: "none"
                                }}>
                                    <AlertDialogHeader>
                                        <AlertDialogDescription  className="text-[#fff] text-lg">
                                            Tem certeza que deseja <br/> excluir este item?
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="bg-[#FFFFFF] text-[#000] rounded-xl w-[88px] h-[35px] flex justify-center items-center">Voltar</AlertDialogCancel>
                                        <AlertDialogAction className="bg-[#88000A] text-[#fff] rounded-xl w-[88px] h-[35px] flex justify-center items-center">Apagar</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <span className="bg-[#257400] text-[#fff] rounded-xl w-[114px] h-[35px] flex justify-center items-center">Baixar Recibo</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}