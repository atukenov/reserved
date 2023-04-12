import styled from "styled-components";
import { device } from "../../utils/types";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(74, 76, 80);
  color: white;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  justify-content: space-around;
  gap: 10px;
  align-items: flex-start;
  @media ${device.tablet} {
    padding: 20px 50px 10px 50px;
  }
  @media ${device.laptop} {
    padding: 20px 80px 10px 80px;
  }
  @media ${device.desktop} {
    padding: 20px 125px 10px 125px;
  }
  hr {
    width: 100%;
    border: 1px solid orange;
  }
`;
export const Logo = styled.h1`
  font-size: 20px;
  color: white;
`;
export const Ad = styled.div`
  width: 100%;
  max-width: 400px;
  height: 150px;
  background-color: green;
  border-radius: 10px;
`;
export const MobileApps = styled.div`
  display: flex;
`;
export const FooterList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FooterListItem = styled.div`
  width: 33.33%;
  &:hover {
    color: orange;
    transform: scale(1.1);
    text-decoration: underline;
  }
`;
export const ContactList = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContactListItem = styled.div`
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
    color: orange;
  }
`;
