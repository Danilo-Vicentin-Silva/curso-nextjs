interface CircularProps {
  texto: string;
  quasePerfeito?: boolean;
}

const Circulo = (props: CircularProps) => {
  console.log(props);
  return (
    <div
      className={` flex justify-center items-center
    h-64 w-64 bg-cyan-500 text-black text-3xl font-black ${
      props.quasePerfeito ? "rounded-2xl" : "rounded-full"
    }`}
    >
      {props.texto}
    </div>
  );
};

export default Circulo;
