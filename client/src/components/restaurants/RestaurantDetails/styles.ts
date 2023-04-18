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
  flex: 15 1 300px;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
export const Photo = styled.div`
  height: 100px;
  width: 100px;
`;
export const Title = styled.div``;
export const Name = styled.h1`
  font-size: 20px;
  margin-bottom: 3px;
`;
export const Location = styled.div``;
export const Category = styled.div``;
export const Description = styled.div``;
export const Body = styled.p`
  font-size: 14px;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;
export const Tag = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 10px;
`;
export const Reservation = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
`;
export const ReservationButton = styled.button`
  width: 200px;
  padding: 10px 15px;
  background-color: orange;
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
export const HoursOfOperation = styled.div``;
