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
export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  position: absolute;
  bottom: 20px;
  padding-left: 20px;
`;
