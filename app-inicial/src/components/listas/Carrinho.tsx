import ItemCarrinho from "@/model/ItemCarrinho";
import * as React from "react";
import CarrinhhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";

interface Props {
  itens: ItemCarrinho[];
}

const Carrinho = (props: Props) => {
  const total = props.itens.reduce(
    (acumulador, item) => acumulador + item.quantidade * item.produto.preco,
    0
  );

  return (
    <div className="flex flex-col border border-white rounded-md overflow-hidden w-4/5">
      <div className="bg-zinc-800 text-3xl p-3">
        <span>Carrinho</span>
      </div>
      <div className="flex gap-5 p-5">
        {props.itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          props.itens.map((item, i) => {
            return <CarrinhhoItem {...item} key={i} />;
          })
        )}
      </div>
    </div>
  );
};

export default Carrinho;
