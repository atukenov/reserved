import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

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
