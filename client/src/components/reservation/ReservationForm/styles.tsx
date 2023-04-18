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
export const StepsContainer = styled.div``;
export const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */

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
`;
export const ProgressBar = styled.div`
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
  height: 50px;
`;

export const Title = styled.div`
  height: 50px;
  padding-top: 10px;
  font-weight: 600;
`;
export const Data = styled.div``;
export const Number = styled.div``;
export const Text = styled.div``;
export const FormContainer = styled.div``;
