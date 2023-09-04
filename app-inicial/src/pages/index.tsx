import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Principal</h1>
      <div className="flex flex-col">
        <Link href="/contexto/contador">
          <span>Contador</span>
        </Link>
        <Link href={"/listas/produtos"}>
          <span>Produtos</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
