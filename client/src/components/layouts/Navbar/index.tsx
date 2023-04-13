import React, { useState } from "react";
import {
  Burger,
  BurgerLine,
  Container,
  DropDown,
  List,
  ListItem,
  Logo,
  Nav,
} from "./styles";

const Navbar = () => {
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
    <>
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
    </>
  );
};

export default Navbar;
