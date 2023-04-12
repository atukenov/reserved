import styled from "styled-components";
import { device } from "../../utils/types";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  @media ${device.tablet} {
    padding: 0 50px;
  }
  @media ${device.laptop} {
    padding: 0 80px;
  }
  @media ${device.desktop} {
    padding: 0 120px;
  }
`;

export const List = styled.div`
  display: flex;
  max-width: 1200px;
  background-color: gray;
`;
export const ListItem = styled.div`
  margin: 0 5px;
`;
