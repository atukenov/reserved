import React from "react";
import RestaurantCard from "../RestaurantCard";
import { Container, List, ListItem, Title } from "./styles";

const PopularList = () => {
  return (
    <Container>
      <Title>Popular restaurants</Title>
      <List>
        <ListItem>
          <RestaurantCard />
        </ListItem>
        <ListItem>
          <RestaurantCard />
        </ListItem>
        <ListItem>
          <RestaurantCard />
        </ListItem>
        <ListItem>
          <RestaurantCard />
        </ListItem>
      </List>
    </Container>
  );
};

export default PopularList;
