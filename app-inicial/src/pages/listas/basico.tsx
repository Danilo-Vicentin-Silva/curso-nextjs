import { GiSoccerBall } from "react-icons/gi";
import TabelaSerieA from "@/components/listas/TabelaSerieA";

const PaginaListaBasica = () => {
  const tabelaSerieA = [
    "Botafogo	",
    "Flamengo",
    "Grêmio	",
    "São Paulo	",
    "Fluminense	",
    "Palmeiras",
    "Bragantino",
    "Athletico-PR",
    "Fortaleza	",
    "Cruzeiro",
  ];
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-5xl flex items-center gap-2 font-black">
        <GiSoccerBall size={50} stroke="1" />
        Tabela Série A
      </h1>
      <TabelaSerieA times={tabelaSerieA} />
    </div>
  );
};

export default PaginaListaBasica;
