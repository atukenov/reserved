import styled from "styled-components";
import { device } from "../../../utils/types";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px 20px 0 20px;
  @media ${device.tablet} {
    padding: 20px 50px 0 50px;
  }
  @media ${device.laptop} {
    padding: 20px 80px 0 80px;
  }
  @media ${device.desktop} {
    padding: 20px 120px 0 120px;
  }
`;

export const ImageContainer = styled.div`
  background-color: gray;
  height: 250px;
`;
export const Details = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px;
`;
export const Restaurant = styled.div`
  background-color: green;
  flex: 15 1 300px;
`;
export const Header = styled.div`
  display: flex;
`;
export const Photo = styled.div``;
export const Title = styled.div``;
export const Name = styled.div``;
export const Location = styled.div``;
export const Category = styled.div``;
export const Description = styled.div``;
export const Body = styled.div``;
export const Tags = styled.div``;
export const Tag = styled.div``;
export const Reservation = styled.div`
  background-color: red;
  flex: 1 1 300px;
`;
export const ReservationButton = styled.button``;
export const HoursOfOperation = styled.div``;
