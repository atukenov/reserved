import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Info,
  Ratings,
  Title,
  Location,
} from "./styles";
import { Restaurant } from "../../../utils/types";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <Card>
      <CardImg>
        <img
          src={`https://source.unsplash.com/random/250x200?${restaurant.restaurantName}`}
          alt={restaurant.restaurantName}
        />
        <Ratings>* 4.6</Ratings>
      </CardImg>
      <CardBody>
        <Title>{restaurant.restaurantName}</Title>
        <Location>{restaurant.location}</Location>
        <Info>{restaurant.type}</Info>
        <Button>Reserve Now</Button>
      </CardBody>
    </Card>
  );
};

export default RestaurantCard;
