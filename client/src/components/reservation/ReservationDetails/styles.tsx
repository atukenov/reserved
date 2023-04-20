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

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Status = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 4px solid black;
  align-items: center;
  border-radius: 50%;
`;

export const Step = styled.div`
  display: flex;
  flex: 1 1 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  position: relative;
  &.active {
    color: green;
    ${Status} {
      background-color: green;
      border-color: green;
    }
  }

  &.current {
    color: orange;
    ${Status} {
      border-color: orange;
    }
  }

  &.cancelled {
    color: red;
    ${Status} {
      border-color: red;
    }
  }

  &.confirmed {
    color: green;
    ${Status} {
      border-color: green;
    }
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  z-index: -1;
  height: 5px;
  width: 100%;
  background-color: black;
  &.active {
    color: green;
    background-color: green;
  }
  &.current {
    color: orange;
    background-color: orange;
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  height: 60px;
  padding-top: 10px;
  font-weight: 600;
  width: 60px;
  text-align: center;
`;
