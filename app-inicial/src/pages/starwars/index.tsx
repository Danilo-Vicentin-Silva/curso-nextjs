import Background from "@/components/starwars/Background"
import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"

const PaginaStarWars = () => {
  const { processando, personagens, selecionarPersonagem } = useStarWars()

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
      <Background />

      {processando ? (
        <h1>Processado...</h1>
      ) : personagens.length > 0 ? (
        <Personagens
          personagens={personagens}
          selecionar={selecionarPersonagem}
        />
      ) : (
        <div>Nenhum personagem encontrado</div>
      )}
    </div>
  )
}

export default PaginaStarWars
