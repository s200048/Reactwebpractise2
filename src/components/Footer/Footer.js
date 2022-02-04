import React from "react";
import { Container, FooterDiv, Footertext } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <Footertext>Copyright &copy; HowardMui. All Rights Reserved</Footertext>
        <Footertext>Designed by Howard Mui</Footertext>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
