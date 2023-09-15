<<<<<<< HEAD
=======
import { AiOutlineCheck } from "react-icons/ai"
>>>>>>> 69edcbdf07f9d45122a8a65ddf3bec67c99f2268
import React from "react"

interface Props {
  filmes: any[]
<<<<<<< HEAD
  voltar: () => void
=======
  selecionar: (personagem: any) => void
>>>>>>> 69edcbdf07f9d45122a8a65ddf3bec67c99f2268
}

const Filmes = (props: Props) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center gap-5 w-full">
      <button className="botao" onClick={() => props.voltar()}>
        Voltar
      </button>
      <table className="w-3/5 opacity-80 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-900">
            <th className="p-2 font-black">Título</th>
            <th className="p-2 font-black">Episódio</th>
            <th className="p-2 font-black">Data</th>
          </tr>
        </thead>
        <tbody>
          {props.filmes.map((filme: any, indice: number) => (
            <tr
              className={`
                text-center
                ${indice % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"}
              `}
              key={filme.title}
            >
              <td className="p-2">{filme.title}</td>
              <td className="p-2">{filme.episode_id}</td>
              <td className="p-2">
                {new Date(filme.release_date).toLocaleDateString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
=======
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
        {props.filmes.map((personagem: any, indice: number) => (
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
>>>>>>> 69edcbdf07f9d45122a8a65ddf3bec67c99f2268
  )
}

export default Filmes
