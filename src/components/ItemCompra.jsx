export default function ItemCompra({ produto, quantidade }) {
  return (
    <li className="item-compra">
      <span>{produto}</span>
      <span className="quantidade">Qtd: {quantidade}</span>
    </li>
  );
}