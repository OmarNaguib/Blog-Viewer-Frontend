import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getPosts = async () => {
  const response = await fetch(
    "http://localhost:8000/api/posts/?isPublished=true"
  );
  const posts = await response.json();
  return posts;
};
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setPosts(data.posts));
  }, []);
  console.log("render", posts);
  const postsDisplay = posts.map((post) => (
    <div key={post.id}>
      <Link to={`posts/${post._id}`}>
        <h2>{post.title}</h2>
      </Link>
    </div>
  ));
  return (
    <>
      <h1>Home</h1>
      {postsDisplay}
    </>
  );
}
