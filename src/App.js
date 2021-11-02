import Nav from "./components/Nav";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Dropdown from "./components/Dropdown";

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
    <>
      <GlobalStyle />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Nav toggle={toggle} isOpen={isOpen} />

      <p>Next design:</p>
      <a href="https://www.youtube.com/watch?v=sKs9FiAHSN4&ab_channel=BrianDesign">
        This is the Link
      </a>
    </>
  );
}

export default App;
