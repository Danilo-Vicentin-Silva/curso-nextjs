import Circulo from "@/components/basicos/Circulo";

const paginaCirculos = () => {
  return (
    <div className="flex justify-around items-center h-screen">
      <Circulo></Circulo>
      <Circulo></Circulo>
      <Circulo></Circulo>
    </div>
  );
};

export default paginaCirculos;
