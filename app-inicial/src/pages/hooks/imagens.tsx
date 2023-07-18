import ImagemAleatoria from "@/components/hooks/ImagemAleatoria";

const paginaImagens = () => {
  return (
    <div className={`flex justify-center items-center h-screen gap-5`}>
      <ImagemAleatoria />
    </div>
  );
};

export default paginaImagens;
