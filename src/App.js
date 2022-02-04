import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero/Hero";
import { SliderData } from "./data/SliderData";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import About from "./components/About";
// import Info from "./components/Info";
// import { InfoData } from "./data/InfoData";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

html, body {
  overflow-x: hidden;
}
`;

function App() {
  let [isOpen, SetIsOpen] = useState(false);

  let toggle = (e) => {
    SetIsOpen(!isOpen);
    console.log(e.target);
  };

  return (
    <Routes>
      <GlobalStyle />
      <Nav toggle={toggle} isOpen={isOpen} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact>
          <Hero slides={SliderData} />
        </Route>
        <Route path="/about" exact component={About} />
      </Switch>

      <Footer />
      {/* <Info {...InfoData} /> */}
    </Routes>
  );
}

export default App;
