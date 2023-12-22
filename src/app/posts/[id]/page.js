
import { useRouter } from "next/router";
import { getPostById } from "../utils";
import Boton from "@/components/Boton";

const fetchData = async (id) => {
  try {
    const postData = await getPostById(id);
    return postData;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

const Post = ({ post }) => {
  const { back } = useRouter();

  if (!post) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>

      <Boton className="my-8" onClick={back}>
        Volver
      </Boton>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await fetchData(id);

  return {
    props: {
      post,
    },
  };
}

export default Post;



