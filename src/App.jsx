import { useState } from "react";
import Home from "./components/Home";
import Post from "./components/Post";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/posts/:postId", element: <Post /> },
]);
function App() {
  return (
    <>
      <h1>app</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
