import { Routes, Route, Link } from "react-router-dom";
//react router imp
import { useState, useEffect } from "react";
//use state imp
import BlogsPage from "./Pages/Blogs";
import PostBlogPage from "./Pages/PostBlogPage";
import React from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = (props) => {
  const [serverJSON, setServerJSON] = useState({ message : [] });
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const blogSubmit = async (blog) => {
    setIsFetching(true);
    const url = `${urlEndpoint}/blogs/blog-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const responseJSON = await response.json();
    setIsFetching(false);
    return responseJSON;
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(
        `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
      );
      //endpoint modified to fetch all blogs
      const apiJSON = await apiResponse.json();
      console.log(apiJSON);
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
    //watches changes in a state - in those particular states
  }, [sortField, sortOrder, filterField, filterValue, limit, page, isFetching]);
  console.log("serverJSON ", serverJSON);
  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route
            index
            element={
              <BlogsPage
                blogs={serverJSON.message}
                sortField={sortField}
                setSortField={setSortField}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                filterField={filterField}
                setFilterField={setFilterField}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route
            path="/post-blog"
            element={<PostBlogPage blogSubmit={blogSubmit} />}
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
