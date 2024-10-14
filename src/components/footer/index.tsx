interface FooterProps {
    onSubmit?: () => void; 
}

const Footer: React.FC<FooterProps> = ({ onSubmit }) => {
    return (
        <footer className="w-[70%] m-auto mt-[3%] grid gap-10">
            <div className="flex justify-between items-center">
                <span>Descontos</span>
                <span>R$ 0</span>
            </div>
            
            <div className="flex justify-between items-center">
                <span>Sub total</span>
                <span>R$ 21,03</span>
            </div>

            <div 
                onClick={onSubmit} 
                className="flex justify-center items-center w-[416px] h-[47px] bg-[#131313] text-[#fff] m-auto rounded-lg cursor-pointer" // Adicionando cursor-pointer para indicar que é clicável
            >
                <span>
                    Continue para pagamento
                </span>
            </div>
        </footer>
    );
};

export default Footer;