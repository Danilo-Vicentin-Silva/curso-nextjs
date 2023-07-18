interface Props {
  nome: string;
  sobrenome: string;
}

const Filho = (props: Props) => {
  return (
    <div className="flex justify-center items-center border-white bg-green-500 rounded-md p-5">
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">Filho</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
    </div>
  );
};

export default Filho;
