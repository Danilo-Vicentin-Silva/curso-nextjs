import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="title">Principal</h1>
      <div className="flex flex-col">
        <ul>
          <li>
            <Link href="/contexto/contador">
              <span>Contador</span>
            </Link>
          </li>
          <li>
            <Link href={"/listas/produtos"}>
              <span>Produtos</span>
            </Link>
          </li>
          <li>
            <Link href={"/dynamicRoutes"}>
              <span>Dynamic Routes</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
