import React from "react";
import {
  Ad,
  ContactList,
  ContactListItem,
  Container,
  FooterList,
  FooterListItem,
  Logo,
  MobileApps,
  Wrapper,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>RESERVED</Logo>
        <Ad></Ad>
        <MobileApps>Apple Android</MobileApps>
        <FooterList>
          <FooterListItem>About</FooterListItem>
          <FooterListItem>Support</FooterListItem>
          <FooterListItem>Terms of service</FooterListItem>
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>Contact Us</FooterListItem>
          <FooterListItem>Privacy policy</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
        </FooterList>
        <ContactList>
          Connect with us on
          <ContactListItem>Instagram</ContactListItem>•
          <ContactListItem>Facebook</ContactListItem>•
          <ContactListItem>Twitter</ContactListItem>
        </ContactList>
        <hr />
      </Wrapper>
    </Container>
  );
};

export default Footer;
