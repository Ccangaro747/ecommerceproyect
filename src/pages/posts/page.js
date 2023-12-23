"use client"
import { useEffect, useState } from "react";
import { getPosts } from "./utils";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Error fetching posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Puedes mostrar un spinner u otro indicador de carga aquí
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="my-4">
          <Link href={`/posts/${post.id}`}>
            <h3 className="text-2xl font-semi">{post.title}</h3>
            <hr />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;


