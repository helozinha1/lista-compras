import ItemCompra from './components/ItemCompra';


const compras = [
  { id: 1, produto: 'Arroz 5kg', quantidade: 2 },
  { id: 2, produto: 'Feijão Carioca', quantidade: 3 },
  { id: 3, produto: 'Leite Integral', quantidade: 6 },
  { id: 4, produto: 'Café Torrado', quantidade: 1 },
  { id: 5, produto: 'Açúcar Refinado', quantidade: 2 }
];

export default function App() {
  return (
    <div className="app-container">
      <h1>Lista de Compras</h1>
      <ul className="lista-compras">
        {compras.map((item) => (
          <ItemCompra
            key={item.id}
            produto={item.produto}
            quantidade={item.quantidade}
          />
        ))}
      </ul>
    </div>
  );
}