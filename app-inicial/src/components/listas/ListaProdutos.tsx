import Produto from "@/model/Produto";
import ProdutoItem from "./ProdutoItem";

interface Props {
  produtos: Produto[];
  comprar: (produto: Produto) => void;
}

const ListaProdutos = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-5">
      {props.produtos.map((produto) => (
        <ProdutoItem
          key={produto.id}
          produto={produto}
          comprar={props.comprar}
        />
      ))}
    </div>
  );
};

export default ListaProdutos;
