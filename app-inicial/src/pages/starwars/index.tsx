import Background from "@/components/starwars/Background"
import Filmes from "@/components/starwars/Filmes"
import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"

const PaginaStarWars = () => {
<<<<<<< HEAD
  const { processando, personagens, voltar, filmes, selecionarPersonagem } =
    useStarWars()
=======
  const { processando, personagens, selecionarPersonagem } = useStarWars()
>>>>>>> 69edcbdf07f9d45122a8a65ddf3bec67c99f2268

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
      <Background />

      {processando ? (
        <h1>Processado...</h1>
      ) : filmes.length > 0 ? (
        <Filmes filmes={filmes} voltar={voltar} />
      ) : personagens.length > 0 ? (
        <Personagens
          personagens={personagens}
          selecionar={selecionarPersonagem}
        />
      ) : (
        <div>Dados não encontrados</div>
      )}
    </div>
  )
}

export default PaginaStarWars
