import React from "react";

const BlogsPage = (props) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <p>
        Server Message:{" "}
        {props.allBlogs.map((blog, index) => {
          return (
            <div
              key={`${blog}-${index}`}
              style={{
                display: "flex",
              }}
            >
              Id: {blog.id}
              <br></br>  
              Title : {blog.title.toUpperCase()}
              <br></br>
              Author : {blog.author}
              <br></br>
              Text: {blog.text}
              <br></br>
              {blog.createdAt}
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default BlogsPage;
