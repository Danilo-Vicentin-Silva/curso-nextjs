import Link from "next/link";
import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const todoId = router.query.todoId;
  const commentsId = router.query.commentsId;

  return (
    <div>
      <Link className="m-5 botao" href={`/dynamicRoutes/${todoId}`} rel="prev">
        Voltar
      </Link>
      <h1 className="title">Comentário</h1>
      <p className="m-5">Exibindo o comentário número: {commentsId}</p>
    </div>
  );
};

export default Comment;
