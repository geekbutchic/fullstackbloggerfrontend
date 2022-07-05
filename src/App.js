import { Routes, Route } from "react-router-dom";
//react router imp
import { useState, useEffect } from "react";
//use state imp
import React from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState({ message: null });

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route />
        </Routes>
      </header>
    </div>
  );
};

export default App;
