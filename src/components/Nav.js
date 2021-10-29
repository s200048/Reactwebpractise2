import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";

const NavStyle = styled.nav`
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const Nav = () => {
  return (
    <NavStyle>
      <Logo>Howard</Logo>
      <MenuBars />
      <NavMenu className="IsDiv">
        {menuData.map((item, index) => (
          <NavMenuLinks as={Link} to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </NavStyle>
  );
};

export default Nav;
