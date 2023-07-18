interface Props {
  valor: number;
}

const Display = (props: Props) => {
  return (
    <div className=" flex flex-1 justify-center items-center text-5xl font-black bg-zinc-800 rounded-md p-5">
      {props.valor}
    </div>
  );
};

export default Display;
