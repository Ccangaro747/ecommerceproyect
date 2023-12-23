"use client"
// pages/posts/[id]/page.js
import { useRouter } from "next/router";
import Boton from "@/components/Boton";
import { getPostById } from "../utils";

const Post = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return <p>Cargando...</p>;
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

export default Post;





