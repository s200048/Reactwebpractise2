import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${(props) => (props.primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  padding: ${(props) => (props.big ? "16px 40px" : "14px 24px")};
  color: ${(props) => (props.primary ? "palevioletred" : "#000d1a")};
  font-size: ${(props) => (props.big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-5px);
  }
`;

//palevioletred
