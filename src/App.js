import React from "react";
import "./App.css";
import SideNavbar from "./components/SideNavbar";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SideNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Projects />}></Route>
          <Route
            path="*"
            element={<div className="NoPage">No Page Found</div>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
