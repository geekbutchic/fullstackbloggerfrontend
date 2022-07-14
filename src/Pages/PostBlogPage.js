import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const PostBlogPage = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ marginLeft : "20px"}}>
      <h1>Post Blog Page</h1>
      <br></br>
      <label>Title</label>
      <input
        style={{ display: "flex"}}
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
          console.log(newTitle);
        }}
      ></input>
      <label>Author</label>
      <input
        style={{ display: "flex"}}
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
          console.log(newAuthor);
        }}
      ></input>

      <label>Text Area</label>
      <textarea
         style={{ display: "flex"}}
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
          console.log(newText);
        }}
      ></textarea>
      <button
      style={{ marginTop: "10px"}}
      onClick={async() => {
        await props.blogSubmit({
            title: title,
            author: author, 
            text: text,
        })
        navigate("/")
      }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default PostBlogPage;
