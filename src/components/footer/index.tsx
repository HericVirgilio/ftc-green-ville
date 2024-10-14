export default function Footer(){
    return(
        <footer className="w-[70%] m-auto mt-[3%] grid gap-10">
            <div className="flex justify-between alims-center">
                <span>Descontos</span>
                <span>R$ 0</span>
            </div>
            
            <div className="flex justify-between alims-center">
                <span>Sub total</span>
                <span>R$ 21,03</span>
            </div>

            <div className="flex justify-center items-center w-[416px] h-[47px] bg-[#131313] text-[#fff] m-auto rounded-lg">
                <span>
                        Continue para pagamento
                </span>
            </div>

        </footer>
    )
}