import React from "react";

const BlogManagerCard = (props) => {
  const createdAtDate = new Date(props.blog.createdAt);
  const createdAtString = createdAtDate.toDateString();
  const modifiedAtDate = new Date(props.blog.lastModified);
  const modifiedAtString = modifiedAtDate.toDateString();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#282c34",
        color: "white",
        fontSize: "20px",
        minWidth: "80vw",
        border: "1px solid white",
        margin: "10px",
        padding: "20px",
      }}
    >
      <h3>Blog Manager Card</h3>
      <span>
        <p>
          <strong>Title: </strong>
          &nbsp;
          {props.blog.title.toUpperCase()}
        </p>
      </span>
      <span>
        <p>
          <strong>Author: </strong>
          &nbsp;
          {props.blog.author}
        </p>
      </span>
      <span>
        <p>
          <strong>Created At: </strong>
          &nbsp;
          {createdAtString}
        </p>
      </span>
      <span>
        <p>
          <strong>Last Modified: </strong>
          &nbsp;
          {modifiedAtString}
        </p>
      </span>
      <span>
        <p>
          <strong>Id: </strong>
          &nbsp;
          {props.blog.id}
        </p>
      </span>
      <button
        style={{
          borderRadius: "10px",
          width: "80px",
          height: "30px",
        }}
        onClick={async () => {
          await props.deleteBlog(props.blog.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogManagerCard;
