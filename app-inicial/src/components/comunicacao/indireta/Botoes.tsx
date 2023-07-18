interface Props {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}

const Botoes = (props: Props) => {
  return (
    <div className="flex justify-between pt-2 gap-2">
      <button className="botao flex-1" onClick={() => props.dec(10)}>
        -10
      </button>
      <button className="botao flex-1" onClick={() => props.inc(13)}>
        +13
      </button>
    </div>
  );
};

export default Botoes;
