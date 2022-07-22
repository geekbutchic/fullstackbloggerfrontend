import React from "react";
import BlogManagerCard from "../Components/BlogManagerCard";

const BlogManager = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems : "center", justifyContent: "center", backgroundColor : "#282c34", color : "white", fontSize : "20px"}}>
      <h1>Blog Manager</h1>
      {props.adminBlogList.map((blog, index) => {
        return <BlogManagerCard blog={blog} key={index} deleteBlog={props.deleteBlog} />;
      })}
    </div>
  );
};

export default BlogManager;
