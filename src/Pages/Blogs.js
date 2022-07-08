import React from "react";

const BlogsPage = (props) => {
  return (
    <div className="blogs-page">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Blogs Page</h1>
      <p>
        Select:{" "}
        <select
          defaultValue={props.sortField}
          onChange={(e) => {
            const value = e.target.value;
            props.setSortField(value);
          }}
        >
          <option value=""></option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="createdAt">Generated</option>
        </select>{" "}
        SortOrder:{" "}
        <select
          defaultValue={props.sortOrder}
          onChange={(e) => {
            const value = e.target.value;
            props.setSortOrder(value);
          }}
        >
          <option value="ASC">Ascend</option>
          <option value="DESC">Descend</option>
        </select>{" "}
        Filter Field:{" "}
        <select 
        defaultValue={props.filterField}
        onChange={(e)=> {
          const value = e.target.value;
          props.setFilterField(value)
        }}
        >
          <option value=""></option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <br></br>
        Filter Value:{" "}
        <input
          type="text"
          value={props.filterValue}
          onChange={(e) => {
            const value = e.target.value;
            props.setFilterValue(value);
          }}
        ></input>{" "}
        Limit:{" "}
        <input
          type="number"
          value={props.limit}
          onChange={(e) => {
            const value = e.target.value;
            props.setLimit(value);
          }}
        ></input>{" "}
        Page:{" "}
        <input
          value={props.page}
          onChange={(e) => {
            const value = e.target.value;
            props.setPage(value);
          }}
        ></input>
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
