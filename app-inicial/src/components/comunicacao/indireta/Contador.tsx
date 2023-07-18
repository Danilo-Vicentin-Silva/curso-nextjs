import React from "react";
import Botoes from "./Botoes";
import Display from "./Display";

const Contador = () => {
  const [nun, setNun] = React.useState<number>(0);
  const incrementar = (valor: number) => {
    setNun(nun + valor);
  };
  const decrementar = (valor: number) => {
    setNun(nun - valor);
  };

  return (
    <div className="flex flex-col border w-72 h-72 border-zinc-500 rounded-lg p-2">
      <Display valor={nun} />
      <Botoes inc={incrementar} dec={decrementar} />
    </div>
  );
};

export default Contador;
