import { ContadorContext } from "@/data/contexts/ContadorContext"
import Link from "next/link"
import { useContext } from "react"

const Contador = () => {
  const { numero, incrementar, decrementar } = useContext(ContadorContext)

  return (
    <div className="flex flex-col items-center gap-5 font-black">
      <span className="text-6xl">{numero}</span>
      <div className="flex gap-5">
        <button className="botao" onClick={incrementar}>
          +1
        </button>
        <button className="botao" onClick={decrementar}>
          -1
        </button>
        <Link href="/">
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  )
}

export default Contador
