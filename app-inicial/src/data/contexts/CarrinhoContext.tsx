import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import { createContext, useState } from "react"

export const CarrinoContext = createContext({} as any)

const CarrinhoProvider = (props: any) => {
  const [items, setItems] = useState<ItemCarrinho[]>([])

  const adicionarProduto = (produto: Produto) => {
    const itemAtual = items.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    }
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
    const outrosItems = items.filter((item) => item.produto.id !== produto.id)
    setItems([...outrosItems, novoItem])
  }

  return (
    <CarrinoContext.Provider value={{ items, adicionarProduto }}>
      {props.children}
    </CarrinoContext.Provider>
  )
}

export default CarrinhoProvider
