import React, { useState } from "react";
import {
  Burger,
  BurgerLine,
  Container,
  DropDown,
  Intro,
  IntroTitle,
  List,
  ListItem,
  Logo,
  Nav,
  Wrapper,
} from "./styles";
import SearchBar from "../SearchBar";

const Header = () => {
  const [open, setOpen] = useState("closed");

  const handleDropDown = () => {
    setOpen((prev) => {
      switch (prev) {
        case "open":
          return "closed";
        default:
          return "open";
      }
    });
  };

  return (
    <Wrapper>
      <Container>
        <Nav>
          <Logo>RESERVED</Logo>
          <List>
            <ListItem>Need Reservation?</ListItem>
            <ListItem>Learn More</ListItem>
          </List>
          <Burger onClick={handleDropDown}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
          </Burger>
        </Nav>
      </Container>
      <DropDown className={`${open}`}>
        <ul>
          <li>Need Reservation?</li>
          <li>Learn More</li>
        </ul>
        <p>2023 ©️ Amakenzi 🤍</p>
      </DropDown>

      <Intro>
        <IntroTitle>
          Welcome to Reserved! Reserve the restaurant now.
        </IntroTitle>
      </Intro>
      <SearchBar />
    </Wrapper>
  );
};

export default Header;
