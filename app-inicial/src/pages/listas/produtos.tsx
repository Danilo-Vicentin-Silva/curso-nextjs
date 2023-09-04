import Carrinho from "@/components/listas/Carrinho"
import ListaProdutos from "@/components/listas/ListaProdutos"
import { produtos } from "@/constants/produtos"
import { CarrinoContext } from "@/data/contexts/CarrinhoContext"
import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import Link from "next/link"
import { useContext } from "react"

const PaginaProdutos = () => {
  const { items, adicionarProduto } = useContext(CarrinoContext)

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-5">
      <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
      <Carrinho itens={items} />
      <Link href="/">Voltar</Link>
    </div>
  )
}

export default PaginaProdutos
