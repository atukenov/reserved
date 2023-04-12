import React from "react";
import RestaurantDetails from "../RestaurantDetails";
import { Container, List, ListItem, Title } from "./styles";

const Popular = () => {
  return (
    <Container>
      <Title>Popular restaurants</Title>
      <List>
        <ListItem>
          <RestaurantDetails />
        </ListItem>
        <ListItem>
          <RestaurantDetails />
        </ListItem>
        <ListItem>
          <RestaurantDetails />
        </ListItem>
        <ListItem>
          <RestaurantDetails />
        </ListItem>
      </List>
    </Container>
  );
};

export default Popular;
