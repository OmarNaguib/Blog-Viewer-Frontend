/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:8000/api/posts/${postId}`);
      const data = await response.json();
      setPost(data.post);
    };
    const getComments = async () => {
      const response = await fetch(
        `http://localhost:8000/api/posts/${postId}/comments`
      );
      const data = await response.json();
      setComments(data.comments);
    };

    getPost();
    getComments();
  }, []);
  const commentsDisplay = comments.map((comment) => (
    <div key={comment.id}>
      <h3>{comment.author}</h3>
      <p>{comment.commentText}</p>
    </div>
  ));
  async function submitForm(e) {
      e.preventDefault()
      const formData= new FormData(e.target)

      let formDataObject = Object.fromEntries(formData.entries());
      let formDataJsonString = JSON.stringify(formDataObject);

      const response = await fetch(`http://localhost:8000/api/posts/${postId}/comments`,    {
        body: formDataJsonString,
        method: "post",   headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
    });
  }
  return (
    <div className="post">
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <p>{post.postText}</p>
      </div>
      <div className="comments">
        <h2>comments</h2>
        {commentsDisplay}
        <form
          action={`http://localhost:8000/api/posts/${postId}/comments`}
          method="post"
          onSubmit={submitForm}
        >
          <div>
            <label htmlFor="author">name:</label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="your name"
              required
            />
          </div>
          <div>
            <label htmlFor="commentText">Message:</label>
            <input
              type="text"
              name="commentText"
              id="commentText"
              placeholder="your comment"
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
