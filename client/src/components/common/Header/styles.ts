import styled from "styled-components";
import { device } from "../../../utils/types";

export const Wrapper = styled("div")``;

export const Intro = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;
  padding: 100px 20px 0 20px;
  background-color: darkgreen;
  background-image: url("https://source.unsplash.com/random/?city");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 7px 30px darkgreen;
  @media ${device.tablet} {
    padding: 100px 40px 0 40px;
  }
  @media ${device.laptop} {
    padding: 100px 80px 0 80px;
  }
  @media ${device.desktop} {
    padding: 100px 150px 0 150px;
  }
`;

export const IntroTitle = styled("h1")`
  max-width: 1200px;
  width: 100%;
  font-size: 32px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  @media ${device.desktop} {
    padding-left: 70px;
  }
`;
