import React from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando()
  const [personagens, setPersonagens] = React.useState<any[]>([])
  const [personagem, setPersonagem] = React.useState<any>([])
  const [filmes, setFilmes] = React.useState<any>([])

  const obterFilmes = React.useCallback(
    async (personagem: { films: any }) => {
      if (!personagem?.films?.length) return
      try {
        iniciarProcessamento()
        const reqs = personagem.films.map(async (filme: string) => {
          const resp = await fetch(filme)
          return resp.json()
        })
        const filmes = await Promise.all(reqs)
        setFilmes(filmes)
      } finally {
        finalizarProcessamento()
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  )

  const obterPersonagens = React.useCallback(
    async function () {
      try {
        iniciarProcessamento()
        const resp = await fetch("https://swapi.dev/api/people/")
        const data = await resp.json()
        setPersonagens(data.results)
      } finally {
        finalizarProcessamento()
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  )

  function selecionarPersonagem(personagem: any) {
    setPersonagem(personagem)
  }

  const voltar = () => {
    setPersonagem(null)
    setFilmes([])
  }

  React.useEffect(() => {
    obterPersonagens()
  }, [obterPersonagens])

  React.useEffect(() => {
    obterFilmes(personagem)
  }, [personagem, obterFilmes])

  return {
    personagens,
    processando,
    filmes,
    selecionarPersonagem,
    voltar,
  }
}
