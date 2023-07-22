import ItemCarrinho from "@/model/ItemCarrinho";

const CarrinhhoItem = (props: ItemCarrinho) => {
  const exibirComoMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div className="flex rounded-full gap-2 bg-blue-500 items-center">
      <span className="flex justify-center items-center w-7 h-7 rounded-full p-2 bg-blue-700">
        {props.quantidade}
      </span>
      <span>{props.produto.nome}</span>
      <span className="pr-5">
        {exibirComoMoeda(props.produto.preco * props.quantidade)}
      </span>
    </div>
  );
};

export default CarrinhhoItem;
