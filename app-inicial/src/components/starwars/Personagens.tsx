import { AiOutlineCheck } from "react-icons/ai"
import React from "react"

interface Props {
  personagens: any[]
  selecionar: (personagem: any) => void
}

const Personagens = (props: Props) => {
  return (
    <table className="w-3/5 opacity-80 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-zinc-900">
          <th className="p-2 font-black">Nome</th>
          <th className="p-2 font-black">Altura</th>
          <th className="p-2 font-black">Peso</th>
          <th className="p-2 font-black">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.personagens.map((personagem: any, indice: number) => (
          <tr
            className={`
              text-center
              ${indice % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
            `}
            key={personagem.name}
          >
            <td className="p-2">{personagem.name}</td>
            <td className="p-2">{personagem.height}</td>
            <td className="p-2">{personagem.mass}</td>
            <td className="p-2">
              <button
                className="botao"
                onClick={() => props.selecionar(personagem)}
              >
                <AiOutlineCheck size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Personagens
