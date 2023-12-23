"use client"
import { useEffect, useState } from "react";
import { getPosts } from "./utils";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures that useEffect runs only once, similar to componentDidMount

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

