import React from "react";
import GlobalStyles from "./GlobalStyles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles/>
        <Navbar />
        {/* <Routes> */}
          {/* <Route exact path="/" element={<Navbar />} /> */}
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;
