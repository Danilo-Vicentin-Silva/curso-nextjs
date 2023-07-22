import { TbCircleXFilled } from "react-icons/tb";

const CarrinhoVazio = () => {
  return (
    <div className="flex gap-3 justify-center text-zinc-500">
      <TbCircleXFilled size={"2em"} />
      <span>Nenhum item no carrinho</span>
    </div>
  );
};

export default CarrinhoVazio;
