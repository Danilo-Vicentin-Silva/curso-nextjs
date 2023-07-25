import Avo from "@/components/comunicacao/direta/Avo";

const Direta = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-5xl mb-10 font-black">Comunicação Direta</h1>
      <Avo nome="mariano" sobrenome="silva" />
      <Avo nome="antonio" sobrenome="miranda" />
    </div>
  );
};

export default Direta;
