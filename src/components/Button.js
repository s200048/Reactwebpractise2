import styled from "styled-components";
import { Link } from "react-router-dom";
import { FadeInText } from "./Hero/HeroStyles";
import { css } from "styled-components/macro";

export const Button = styled(Link)`
  background: ${(props) => (props.primary ? "#fff" : "#CD853F")};
  white-space: nowrap;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  padding: ${(props) => (props.big ? "16px 40px" : "14px 24px")};
  color: ${(props) => (props.primary ? "black" : "#000d1a")};
  font-size: ${(props) => (props.big ? "30px" : "14px")};
  font-weight: bolder;
  animation: ${(props) =>
    props.animation
      ? css`
          ${FadeInText} 1s ease-in-out
        `
      : ""};

  &:hover {
    transform: translateY(-5px);
  }
`;

//palevioletred
