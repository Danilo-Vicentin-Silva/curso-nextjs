import Link from "next/link";
import { useRouter } from "next/router";

const TodoId = () => {
  const router = useRouter();
  const todoId = router.query.todoId;

  return (
    <div>
      <Link className="m-5 botao" href={"/dynamicRoutes"}>
        Voltar
      </Link>
      <h1 className="title">Exibindo o todo: {todoId}</h1>
      <p>
        Comentário: loren ipsum 1{" "}
        <Link href={`/dynamicRoutes/${todoId}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: loren ipsum 2{" "}
        <Link href={`/dynamicRoutes/${todoId}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: loren ipsum 3{" "}
        <Link href={`/dynamicRoutes/${todoId}/comments/3`}>Detalhes</Link>
      </p>
    </div>
  );
};

export default TodoId;
