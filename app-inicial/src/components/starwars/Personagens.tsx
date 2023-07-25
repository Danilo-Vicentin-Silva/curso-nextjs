import useStarWars from "@/data/hooks/useStarWars"
import React from "react"

interface Props {
  personagens: any[]
}

const Personagens = (props: Props) => {
  const renderizarPersonagens = () => {
    return (
      <ul>
        {props.personagens.map((personagem: any) => (
          <li key={personagem.name}>{personagem.name}</li>
        ))}
      </ul>
    )
  }

  return <div className="">{renderizarPersonagens()}</div>
}

export default Personagens
