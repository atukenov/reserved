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

export const Title = styled.h1`
  font-size: 26px;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  /* border-radius: 10px; */
  /* background-color: gray; */
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); */
  align-items: center;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptop} {
    &::-webkit-scrollbar {
      display: block;
    }
  }
  @media ${device.desktop} {
    &::-webkit-scrollbar {
      display: block;
    }
  }
`;
export const ListItem = styled.div`
  width: 240px;
  padding: 5px 5px;
`;
