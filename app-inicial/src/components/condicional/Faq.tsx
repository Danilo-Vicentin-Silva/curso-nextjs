import React from "react";
import Pergunta from "./Pergunta";

const Faq = () => {
  const [ativo, setAtivo] = React.useState<number>(0);
  const alternarVisibilidade = (indice: number) => {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
      <Pergunta
        indice={0}
        aberta={ativo === 0}
        texto="Quem descobriu o Brasil?"
        resposta="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum est, fusce dis diam metus nostra taciti at fames, nisl sed aliquam senectus nec per torquent aptent. Mi vehicula porta consequat"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={1}
        aberta={ativo === 1}
        texto="O que é Typescript?"
        resposta="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum est, fusce dis diam metus nostra taciti at fames, nisl sed aliquam senectus nec per torquent aptent. Mi vehicula porta consequat"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={2}
        aberta={ativo === 2}
        texto="React é um framework?"
        resposta="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum est, fusce dis diam metus nostra taciti at fames, nisl sed aliquam senectus nec per torquent aptent. Mi vehicula porta consequat"
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={3}
        aberta={ativo === 3}
        texto="Quais as principais funcionalidades do Nextjs?"
        resposta="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum est, fusce dis diam metus nostra taciti at fames, nisl sed aliquam senectus nec per torquent aptent. Mi vehicula porta consequat"
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
};

export default Faq;
