import { Routes, Route } from "react-router-dom";
//react router imp
import { useState, useEffect } from "react";
//use state imp
import BlogsPage from "./Pages/Blogs";
import React from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = (props) => {
  const [serverJSON, setServerJSON] = useState([]);
  const [sortField, setsSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/all-blogs`);
      //endpoint modified to fetch all blogs
      const apiJSON = await apiResponse.json();
      console.log(apiJSON);
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route
            path="/blogs"
            element=
            {<BlogsPage 
            serverJSON={serverJSON}
            sortField={sortField} 
            sortOrder={sortOrder}
            filterField={filterField}
            filterValue={filterValue}
            limit={limit}
            page={page}
            />}
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
