import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
