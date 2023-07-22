import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import React from "react";
import { If } from "./If";
import { IfElse } from "./IfElse";

interface Props {
  indice: number;
  texto: string;
  resposta: string;
  aberta: boolean;
  alternarVisibilidade: (indice: number) => void;
}

const Pergunta = (props: Props) => {
  return (
    <div className="border border-zinc-600 rounded-md overflow-hidden">
      <div
        className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between"
        onClick={() => props.alternarVisibilidade(props.indice)}
      >
        <span>{props.texto}</span>
        <IfElse teste={props.aberta}>
          <AiFillCaretUp />
          <AiFillCaretDown />
        </IfElse>
      </div>
      <If teste={props.aberta}>
        <div className="p-5">{props.resposta}</div>
      </If>
    </div>
  );
};

export default Pergunta;
