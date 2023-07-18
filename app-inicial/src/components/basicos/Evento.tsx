const Evento = () => {
  let contador = 0;

  const incrementar = () => {
    console.log(contador++);
  };

  return (
    <button
      className={`flex justify-center items-center text-4xl h-72 w-72 bg-green-600`}
      onClick={incrementar}
    >
      Evento
    </button>
  );
};

export default Evento;
