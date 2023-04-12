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
        <div>img</div>
        <Ratings>4.6</Ratings>
      </CardImg>
      <CardBody>
        <Title>fsadfas</Title>
        <Location>fadsfsad</Location>
        <Info>fdsafasd</Info>
        <Button>Reserve Now</Button>
      </CardBody>
    </Card>
  );
};

export default RestaurantDetails;
