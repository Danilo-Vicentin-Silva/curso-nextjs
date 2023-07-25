import Pai from "./Pai";

interface Props {
  nome: string;
  sobrenome: string;
}

const Avo = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-md bg-purple-500 text-white border-white">
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">Avô</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5">
        <Pai nome="joao" sobrenome={props.sobrenome} />
        <Pai nome="pedro" sobrenome={props.sobrenome} />
        <Pai nome="jaime" sobrenome={props.sobrenome} />
      </div>
    </div>
  );
};

export default Avo;
