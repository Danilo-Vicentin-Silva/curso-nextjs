import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import { produtos } from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import * as React from "react";

const PaginaProdutos = () => {
  const [items, setItems] = React.useState<ItemCarrinho[]>([]);

  const adicionarProduto = (produto: Produto) => {
    const itemAtual = items.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    };
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
    const outrosItems = items.filter((item) => item.produto.id !== produto.id);
    setItems([...outrosItems, novoItem]);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-100">
      <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
      <Carrinho itens={items} />
    </div>
  );
};

export default PaginaProdutos;
