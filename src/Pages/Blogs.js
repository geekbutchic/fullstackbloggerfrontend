import React from "react";

const BlogsPage = (props) => {
  return (
    <div className="blogs-page">
      <h1 style={{ display: "flex", justifyContent: "center"}}>Blogs Page</h1>
      <p>
        Select: {" "}
        <select value={props.sortField}>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="createdAt">Generated</option>
        </select>
        {" "}
        SortOrder: {" "}
        <select value={props.sortOrder}>
            <option value="ASC">Ascend</option>
            <option value="DESC">Descend</option>
        </select>
        {" "}
        Filter Field: {" "}
        <select value={props.filterField}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        </select>
        <br></br>
        Filter Value: {" "}
        <input 
        value={props.filterValue}
        onChange={()=> {

        }}
        >
        
        </input>
        {" "}
        Limit: {" "}
        <input
        value={props.limit}
        onChange={()=> {

        }}
        >
        
        </input>
        {" "}
        Page: {" "}
        <input
        value={props.page}
        onChange={()=> {

        }}
        >
        
        </input>
        {props.serverJSON.map((blog, index) => {
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
