import React from "react";
import { useState } from "react";

const PostBlogPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Post Blog Page</h1>
      <br></br>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      ></input>

      <label>Text Area</label>
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      ></textarea>
    </div>
  );
};

export default PostBlogPage;
