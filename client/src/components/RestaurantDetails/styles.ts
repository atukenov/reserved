import styled from "styled-components";

export const Card = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(80, 80, 80, 0.25) 0 0 4px;
`;

export const CardImg = styled.div`
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 125px;
  }
`;

export const Ratings = styled.div`
  position: absolute;
  display: flex;
  bottom: 14px;
  left: 17px;
  background-color: white;
  color: black;
  padding: 0 7px;
  text-align: center;
  border-radius: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
`;
export const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 5px 0;
`;
export const Location = styled.p`
  font-size: 18px;
  padding: 0;
  margin: 0 0 5px 0;
`;
export const Info = styled.p`
  font-size: 18px;
  padding: 0;
  margin: 0 0 5px 0;
`;
export const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
