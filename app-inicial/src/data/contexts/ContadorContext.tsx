import { createContext, useState } from "react"

interface Props {
  numero: number
  incrementar: () => void
  decrementar: () => void
}

export const ContadorContext = createContext<Props>({} as any)

const ContadorProvider = (props: any) => {
  const [numero, setNumero] = useState(0)

  const incrementar = () => {
    setNumero(numero + 1)
  }

  const decrementar = () => {
    setNumero(numero - 1)
  }

  return (
    <ContadorContext.Provider value={{ numero, incrementar, decrementar }}>
      {props.children}
    </ContadorContext.Provider>
  )
}

export default ContadorProvider
