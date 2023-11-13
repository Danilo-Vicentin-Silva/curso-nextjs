import Link from "next/link";
import { useRouter } from "next/router";

const TodoId = () => {

    const router = useRouter();
    const todoId = router.query.todoId

  return (
    <>
      <Link href={"/dynamicRoutes"}>Voltar</Link>
    </>
  );
};

export default TodoId;
