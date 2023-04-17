import React from "react";
import {
  Category,
  Container,
  Description,
  Details,
  Header,
  HoursOfOperation,
  ImageContainer,
  Name,
  Photo,
  Reservation,
  ReservationButton,
  Restaurant,
  Tag,
  Tags,
  Title,
  Location,
  Body,
} from "./styles";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  return (
    <Container>
      <ImageContainer>img</ImageContainer>
      <Details>
        <Restaurant>
          <Header>
            <Photo>photo</Photo>
            <Title>
              <Name>Name</Name>
              <Location>Atyrau</Location>
              <Category>International - Casual Dining - $$</Category>
            </Title>
          </Header>
          <Description>
            <Name>Description</Name>
            <Body>A lorum prorum exsum and etc</Body>
          </Description>
          <Tags>
            <Tag>tag1</Tag>
            <Tag>tag2</Tag>
            <Tag>tag3</Tag>
            <Tag>tag1</Tag>
            <Tag>tag1</Tag>
            <Tag>tag1</Tag>
            <Tag>tag1</Tag>
            <Tag>tag1</Tag>
          </Tags>
        </Restaurant>
        <Reservation>
          <ReservationButton>Search Availability</ReservationButton>
          <HoursOfOperation>hours</HoursOfOperation>
        </Reservation>
      </Details>
    </Container>
  );
};

export default RestaurantDetails;
