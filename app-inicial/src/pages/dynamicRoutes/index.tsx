import Link from "next/link";

const DynamicRoutes = () => {
  return (
    <div>
      <h1 className="title">Dynamic Routes</h1>
      <Link className="m-5 botao" href={"/dynamicRoutes/1"}>Acessar qualquer produto</Link>
    </div>
  );
};

export default DynamicRoutes;
