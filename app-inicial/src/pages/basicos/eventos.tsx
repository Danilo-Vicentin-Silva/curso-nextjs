import Evento from "@/components/basicos/Evento";

const paginaEventos = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      <Evento />
      <Evento />
      <Evento />
    </div>
  );
};

export default paginaEventos;
