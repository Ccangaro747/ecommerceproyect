import { useRouter } from "next/router";
import { getPostById } from "../utils";
import Boton from "@/components/ui/Boton";
import { useEffect, useState } from "react";

const Post = ({ id }) => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostById(id);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>

      <Boton className="my-8" onClick={() => router.back()}>
        Volver
      </Boton>
    </div>
  );
};


export default Post