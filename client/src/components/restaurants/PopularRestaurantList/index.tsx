import React, { useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import { Container, List, ListItem, Title } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getAllRestaurants,
  restaurantSelector,
} from "../../../slices/restaurantSlice";

const PopularList = () => {
  const dispatch = useAppDispatch();
  const { restaurants } = useAppSelector(restaurantSelector);

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  return (
    <Container>
      <Title>Popular restaurants</Title>
      <List>
        {restaurants?.forEach((restaurant, indx) => {
          return (
            <ListItem key={indx}>
              <RestaurantCard restaurant={restaurant} />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PopularList;
