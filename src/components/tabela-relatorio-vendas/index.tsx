import Image from "next/image";
import "./style.css";

export default function TabelaRelatorioVendas() {
    const salesData = [
        {
          id: '#0004',
          description: '(2) arroz x, (1) feijão...',
          quantity: 1000,
          totalValue: 'R$464.99',
          date: '17/06/2024',
          receiptImg: '/download-nuvem.png',
          detailsImg: '/Detalhes.png',
          deleteImg: '/Apagar.png',
        },
        {
          id: '#0003',
          description: '(2) arroz x, (1) feijão...',
          quantity: 1000,
          totalValue: 'R$464.99',
          date: '17/06/2024',
          receiptImg: '/download-nuvem.png',
          detailsImg: '/Detalhes.png',
          deleteImg: '/Apagar.png',
        },
        {
          id: '#0005',
          description: '(2) arroz x, (1) feijão...',
          quantity: 1000,
          totalValue: 'R$464.99',
          date: '17/06/2024',
          receiptImg: '/download-nuvem.png',
          detailsImg: '/Detalhes.png',
          deleteImg: '/Apagar.png',
        },
        {
          id: '#0007',
          description: '(2) arroz x, (1) feijão...',
          quantity: 1000,
          totalValue: 'R$464.99',
          date: '17/06/2024',
          receiptImg: '/download-nuvem.png',
          detailsImg: '/Detalhes.png',
          deleteImg: '/Apagar.png',
        },
        {
            id: '#0007',
            description: '(2) arroz x, (1) feijão...',
            quantity: 1000,
            totalValue: 'R$464.99',
            date: '17/06/2024',
            receiptImg: '/download-nuvem.png',
            detailsImg: '/Detalhes.png',
            deleteImg: '/Apagar.png',
          },
          {
            id: '#0007',
            description: '(2) arroz x, (1) feijão...',
            quantity: 1000,
            totalValue: 'R$464.99',
            date: '17/06/2024',
            receiptImg: '/download-nuvem.png',
            detailsImg: '/Detalhes.png',
            deleteImg: '/Apagar.png',
          },
      ];

  return (
    <div id="TabelaContainer">
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
                <div className="StyleId">{sale.id}</div>
                <div className="DescricaoRelatorioVendas">{sale.description}</div>
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
