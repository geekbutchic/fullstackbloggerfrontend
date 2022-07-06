import { Routes, Route } from "react-router-dom";
//react router imp
import { useState, useEffect } from "react";
//use state imp
import BlogsPage from './Pages/Blogs'
import React from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/all-blogs`);
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
          <Route path="/blogs" element={<BlogsPage allBlogs={serverJSON}/>}/>
        </Routes>
      </header>
    </div>
  );
};

export default App;
