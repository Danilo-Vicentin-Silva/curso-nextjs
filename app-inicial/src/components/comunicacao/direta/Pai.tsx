import Filho from "./Filho";

interface Props {
  nome: string;
  sobrenome: string;
}

const Pai = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 bg-blue-500 text-white border-white rounded-md p-5">
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">pai</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div>
        <Filho nome="julia" sobrenome={props.sobrenome} />
        <Filho nome="amanda" sobrenome={props.sobrenome} />
      </div>
    </div>
  );
};

export default Pai;
