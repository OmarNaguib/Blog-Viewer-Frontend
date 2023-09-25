/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:8000/api/posts/${postId}`);
      const data = await response.json();
      setPost(data.post);
    };
    getPost();
  }, []);
  console.log(post);
  return <div></div>;
}
