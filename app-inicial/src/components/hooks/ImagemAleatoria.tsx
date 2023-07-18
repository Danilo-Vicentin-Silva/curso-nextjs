import Image from "next/image";
import React from "react";

const ImagemAleatoria = () => {
  const [pesquisa, alterarPesquisa] = React.useState<string>("abstract");
  const [tamanho, alterarTamanho] = React.useState<number>(300);
  const url = "https://source.unsplash.com/featured/";

  const renderizarBotao = (valor: string) => {
    return (
      <button
        onClick={() => {
          alterarPesquisa(valor);
          console.log(valor);
        }}
        className={`bg-blue-500 px-4 py-2 rounded-md`}
      >
        {valor}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <div className="flex justify-center gap-7 nb-5">
        <span>{pesquisa}</span>
        <span>
          {tamanho}X{tamanho}
        </span>
      </div>
      <Image
        src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
        height={300}
        width={300}
        alt="Imagem"
        className="rounded-md"
      />
      <div className="flex justify-between gap-5">
        {renderizarBotao("abstract")}
        {renderizarBotao("city")}
        {renderizarBotao("person")}
      </div>
      <div>
        <input
          type="number"
          value={tamanho}
          className="bg-zinc-800 p-2 rounded-md outline-none w-full"
          onChange={(e) => alterarTamanho(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default ImagemAleatoria;
