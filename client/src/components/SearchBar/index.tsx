import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Capacity,
  Icon,
  Wrapper,
  Counter,
  List,
  ListItem,
  Sign,
} from "./styles";

const SearchBar = () => {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [open, setOpen] = useState("closed");

  const decrement = (who: string) => {
    if (who === "adult") setAdult((prev) => (prev > 0 ? prev - 1 : 0));
    else setChild((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const increment = (who: string) => {
    if (who === "adult") setAdult((prev) => prev + 1);
    else setChild((prev) => prev + 1);
  };

  const handleOpen = () => {
    setOpen((prev) => (prev === "closed" ? "open" : "closed"));
  };

  return (
    <Container>
      <Wrapper>
        <Icon>I</Icon>
        <Input placeholder="Where are you planning to eat?" />
        <Capacity onClick={handleOpen}>
          <Icon>I</Icon>
          <span>{adult}</span>
          <Icon>I</Icon>
          <span>{child}</span>
        </Capacity>
        <Counter className={`${open}`}>
          <List>
            <ListItem>
              <Icon>I</Icon>
              <Sign onClick={() => decrement("adult")}>-</Sign>
              <span>{adult}</span>
              <Sign onClick={() => increment("adult")}>+</Sign>
            </ListItem>
            <ListItem>
              <Icon>I</Icon>
              <Sign onClick={() => decrement("child")}>-</Sign>
              <span>{child}</span>
              <Sign onClick={() => increment("child")}>+</Sign>
            </ListItem>
          </List>
        </Counter>
        <Button>Search</Button>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
