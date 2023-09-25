import { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/posts/:postId", element: <div>h1</div> },
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
