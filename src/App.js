import React from "react";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import GlobalStyle from "./GlobalStyle";
import Projects from "./Pages/Projects/Projects";

function App() {

  return(
    <>
      <GlobalStyle/>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>

  )
}

export default App;
