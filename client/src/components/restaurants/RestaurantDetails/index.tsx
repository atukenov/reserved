import React, { useEffect } from "react";
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
import { SvgIcon } from "../../common/SvgIcon";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getRestaurantById } from "../../../slices/restaurantSlice";
import { restaurantSelector } from "../../../slices/restaurantSlice";
import { Spin } from "antd";

const RestaurantDetails = () => {
  const dispatch = useAppDispatch();
  const { restaurantId } = useParams();
  const { restaurant } = useAppSelector(restaurantSelector);

  useEffect(() => {
    if (restaurantId) dispatch(getRestaurantById(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <Spin spinning={restaurant ? false : true}>
      <Container>
        <ImageContainer>
          <SvgIcon width="100%" height="100%" />
        </ImageContainer>
        <Details>
          <Restaurant>
            <Header>
              <Photo>
                <SvgIcon width="100%" height="100%" />
              </Photo>
              <Title>
                <Name>{restaurant?.restaurantName}</Name>
                <Location>{restaurant?.location}</Location>
                <Category>International - Casual Dining - $$</Category>
              </Title>
            </Header>
            <Description>
              <Name>Description</Name>
              <Body>{restaurant?.description}</Body>
            </Description>
            <Tags>
              {restaurant?.tags?.map((i, index) => {
                return <Tag key={index}>{i}</Tag>;
              })}
            </Tags>
          </Restaurant>
          <Reservation>
            <Link to="/reservation" state={restaurant}>
              <ReservationButton>Search Availability</ReservationButton>
            </Link>
            <HoursOfOperation>{restaurant?.hoursOfOperation}</HoursOfOperation>
          </Reservation>
        </Details>
      </Container>
    </Spin>
  );
};

export default RestaurantDetails;
