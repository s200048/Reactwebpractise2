import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const NavStyle = styled.nav`
  height: 10vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 98;
  width: 100%;
`;

//  background: lightblue;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: 0.3s ease-in;

  &:hover {
    color: orange;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-size: 30px;
  font-style: italic;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    height: auto;
    cursor: pointer;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    color: white;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// eslint-disable-next-line react/prop-types
const Nav = ({ toggle, isOpen }) => {
  return (
    <NavStyle>
      <Logo to="/" isOpen={isOpen}>
        Howard.Co
      </Logo>
      <MenuBars onClick={toggle} isOpen={isOpen} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks as={Link} to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary>
          Contact Us
        </Button>
      </NavBtn>
    </NavStyle>
  );
};

export default Nav;
