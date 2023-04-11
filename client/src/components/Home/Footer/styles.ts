import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #1d1e18;
  color: #faf3dd;
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #faf3dd;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #bdd5ae;
  }
`;

export const Extra = styled("section")`
  background: #1d1e18;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #faf3dd;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #faf3dd;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #bdd5ae;
    text-underline-position: under;
    text-decoration: #bdd5ae solid underline;
  }
`;

export const Chat = styled("p")`
  color: #faf3dd;
  max-width: fit-content;
  border-bottom: 1px solid #faf3dd;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #bdd5ae;
    color: #bdd5ae;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: 150px;

    /* a:not(:last-child) {
      display: none;
    } */
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #faf3dd;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;
