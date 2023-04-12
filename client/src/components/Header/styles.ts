import styled from "styled-components";
import { device } from "../../utils/types";

export const Wrapper = styled("div")``;

export const Container = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media ${device.tablet} {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Burger = styled("div")`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const BurgerLine = styled("div")`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Nav = styled("nav")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  max-width: 1200px;
  width: 100%;
`;

export const Logo = styled("h1")``;

export const List = styled("ul")`
  display: none;
  @media ${device.tablet} {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

export const ListItem = styled("li")`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 14px;
`;

export const DropDown = styled("div")`
  display: none;
  position: absolute;
  padding: 20px 0;
  right: 0;
  width: 250px;
  z-index: 99;
  background-color: orange;
  color: white;
  &.open {
    display: block;
  }
  p {
    margin-top: 350px;
    margin-bottom: 0;
    font-size: 14px;
    text-align: center;
    color: white;
  }
  li {
    border-bottom: 1px solid green;
    &:hover {
      color: red;
    }
  }

  @media ${device.tablet} {
    display: none !important;
  }
`;

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
