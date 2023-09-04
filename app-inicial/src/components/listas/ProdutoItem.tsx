import { AiOutlineShoppingCart } from "react-icons/ai"
import Produto from "@/model/Produto"
import Image from "next/image"

interface Props {
  produto: Produto
  comprar: (produto: Produto) => void
}

const ProdutoItem = (props: Props) => {
  const { produto } = props

  return (
    <div className="flex flex-col border border-zinc-500 rounded-md p-1">
      <Image
        src={props.produto.imagem}
        height={300}
        width={200}
        alt="Imagem do produto"
        className="rounded-md"
      />
      <div className="flex flex-col p-3 gap-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black">{produto.nome}</div>
          <div className="text-green-500 font-bold">R${produto.preco}</div>
        </div>
        <div>
          <div className="text-gray-500">{produto.descricao}</div>
        </div>
        <div>
          <button
            className="botao flex justify-center w-full gap-2"
            onClick={() => props.comprar(produto)}
          >
            <AiOutlineShoppingCart size={"1.5em"} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProdutoItem
