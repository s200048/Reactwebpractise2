/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { menuData } from "../data/MenuData";
import { VscChromeClose } from "react-icons/vsc";

const Dropdiv = styled.div`
  background: orange;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(VscChromeClose)`
  position: absolute;
  top: 3vh;
  right: 5vh;
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const DropdownWrapper = styled.div``;

const DropMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 2rem 1rem;
  color: #fff;
  font-size: 1.5rem;
`;

const Dropbtn = styled.div``;

// eslint-disable-next-line react/prop-types
const Dropdown = ({ toggle, isOpen }) => {
  return (
    <Dropdiv isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}></Icon>
      <DropdownWrapper>
        <DropMenu>
          {menuData.map((item, index) => (
            <NavLink as={Link} to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </DropMenu>
        <Dropbtn>
          <Button to="/contact" primary big>
            Contact Us
          </Button>
        </Dropbtn>
      </DropdownWrapper>
    </Dropdiv>
  );
};

export default Dropdown;
