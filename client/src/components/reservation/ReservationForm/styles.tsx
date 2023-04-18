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

export const Data = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Number = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
  &.name {
    font-size: 18px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  border: 1px solid gray;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px gray;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const Button = styled.button`
  font-size: 18px;
  padding: 3px 15px;
  color: white;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  &.back {
    background-color: green;
    border-color: green;
  }
`;

export const Submitted = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ThankYou = styled.h1``;
export const Message = styled.p`
  span {
    color: green;
    font-weight: 600;
  }
`;
