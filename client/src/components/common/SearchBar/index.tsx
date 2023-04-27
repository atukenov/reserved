import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faPerson,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
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
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [open, setOpen] = useState("closed");
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    navigate("restaurants", { state: { restaurantName: inputText } });
  };

  return (
    <Container>
      <Wrapper>
        <Icon>
          <FontAwesomeIcon icon={faUtensils} size="xl" />
        </Icon>
        <Input
          placeholder="Where are you planning to eat?"
          value={inputText}
          onChange={handleChange}
        />
        {/* <Capacity onClick={handleOpen}>
          <Icon>
            <FontAwesomeIcon icon={faPerson} size="xl" />
          </Icon>
          <span>{adult}</span>
          <Icon>
            <FontAwesomeIcon icon={faChild} size="sm" />
          </Icon>
          <span>{child}</span>
        </Capacity> */}
        {/* <Counter className={`${open}`}>
          <List>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon={faPerson} size="xl" />
              </Icon>
              <Sign onClick={() => decrement("adult")}>-</Sign>
              <span>{adult}</span>
              <Sign onClick={() => increment("adult")}>+</Sign>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon={faChild} size="sm" />
              </Icon>
              <Sign onClick={() => decrement("child")}>-</Sign>
              <span>{child}</span>
              <Sign onClick={() => increment("child")}>+</Sign>
            </ListItem>
          </List>
        </Counter> */}
        <Button onClick={handleSearch}>Search</Button>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
