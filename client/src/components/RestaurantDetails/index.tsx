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

const RestaurantDetails = () => {
  return (
    <Card>
      <CardImg>
        <img src="https://source.unsplash.com/random/250x200?fruit" alt="" />
        <Ratings>* 4.6</Ratings>
      </CardImg>
      <CardBody>
        <Title>Atyrau kala is the best one.</Title>
        <Location>fadsfsad</Location>
        <Info>fdsafasd</Info>
        <Button>Reserve Now</Button>
      </CardBody>
    </Card>
  );
};

export default RestaurantDetails;
