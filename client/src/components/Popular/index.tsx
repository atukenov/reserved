import React from "react";
import RestaurantDetails from "../RestaurantDetails";
import { Container, List, ListItem } from "./styles";

const Popular = () => {
  return (
    <Container>
      <h4>Popular restaurants</h4>
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
