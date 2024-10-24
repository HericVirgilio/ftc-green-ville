import Image from "next/image";
import "./style.css";

export default function TabelaEstoque() {
  const salesData = [
    {
      titulo: 'Arroz',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      img: '/arroz.png',
      description: '(2) arroz x, (1) feijão...',
      quantity: 1000,
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
    {
      titulo: 'Feijão',
      img: '/azeitona.png',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      description: '(2) arroz x, (1) feijão...',
      quantity: 1000,
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
    {
      titulo: 'Macarrão',
      description: '(2) arroz x, (1) feijão...',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      img: '/feijao.png',
      quantity: 1000,
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
    {
      titulo: 'Azeitonas',
      description: '(2) arroz x, (1) feijão...',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      img: '/macarrao.png',
      quantity: 1000,
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
    {
      titulo: 'Lorem',
      description: '(2) arroz x, (1) feijão...',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      quantity: 1000,
      img: '/macarrao.png',
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
    {
      titulo: 'Lorem',
      description: '(2) arroz x, (1) feijão...',
      marcas: 'Lorem ispum',
      tipos: 'Lorem ispum',
      quantity: 1000,
      img: '/macarrao.png',
      totalValue: 'R$464.99',
      date: '17/06/2024',
      receiptImg: '/download-nuvem.png',
      detailsImg: '/Detalhes.png',
      deleteImg: '/Apagar.png',
    },
  ];

  return (
    <div id="TabelaContainerEstoque">
      <table className="StyleAll">
        <thead>
          <tr className="StyleAll">
            <th id="TituloTable" className="StyleAll text-left">Cod. da venda</th>
            <th id="TituloTable" className="StyleAll">Quant. produtos</th>
            <th id="TituloTable" className="StyleAll">Valor Total</th>
            <th id="TituloTable" className="StyleAll">Data</th>
            <th id="TituloTable" className="StyleAll">Recibo</th>
            <th id="TituloTable" className="StyleAll">Detalhes</th>
            <th id="TituloTable" className="StyleAll">Apagar</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index} className="StyleAll">
              <td className="StyleAll">
                <div className="flex">
                  <div>
                    <Image src={sale.img} alt="" width={130} height={87} />
                  </div>
                  <div className="ml-[20px] grid items-center justify-center">
                    <div className="StyleId">{sale.titulo}</div>
                    <div className="StyleId">Marcas: {sale.marcas}</div>
                    <div className="DescricaoRelatorioVendas">Tipos {sale.tipos}</div>
                  </div>
                </div>
              </td>
              <td id="QuantVendas" className="StyleAll">{sale.quantity}</td>
              <td id="QuantVendas" className="StyleAll">{sale.totalValue}</td>
              <td id="QuantVendas" className="StyleAll">{sale.date}</td>
              <td id="QuantVendas" className="StyleAll">
                <span className="ContainerImagensNuvemVendas">
                  <Image src={sale.receiptImg} alt="Recibo" width={16} height={16} />
                </span>
              </td>
              <td id="QuantVendas" className="StyleAll">
                <span className="ContainerImagensNuvemVendas">
                  <Image src={sale.detailsImg} alt="Detalhes" width={88} height={35} />
                </span>
              </td>
              <td id="QuantVendas" className="StyleAll">
                <span className="ContainerImagensNuvemVendas">
                  <Image src={sale.deleteImg} alt="Apagar" width={88} height={35} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
