import { useEffect, useState } from "react";

const getPosts = async () => {
  const response = await fetch("http://localhost:8000/api/posts");
  const posts = await response.json();
  return posts;
};
export default function Home() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setPosts(getPosts());
  }, []);
  return <h2>Home</h2>;
}
