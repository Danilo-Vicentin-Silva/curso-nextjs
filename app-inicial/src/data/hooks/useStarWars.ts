import React from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando()
  const [personagens, setPersonagens] = React.useState<any>([])

  async function simularChamadaAPI() {}

  async function obterPersonagens() {
    try {
      iniciarProcessamento()
      const resp = await fetch("https://swapi.dev/api/people/")
      const data = await resp.json()
      setPersonagens(data.results)
    } finally {
      finalizarProcessamento()
    }
  }

  return {
    personagens,
    obterPersonagens,
    processando,
  }
}
