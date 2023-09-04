import React from "react"

interface Props {
  filmes: any[]
  voltar: () => void
}

const Filmes = (props: Props) => {
  return (
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
  )
}

export default Filmes
