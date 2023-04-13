import styled from "styled-components";

export const Container = styled("div")`
  position: relative;
  top: -25px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled("div")`
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 600px;
  height: 50px;
  padding: 0 0 0 20px;
  display: flex;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Input = styled("input")`
  width: 100%;
  height: 50px;
  background-color: white;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); */
  border-radius: 0;
  padding-left: 10px;
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;

export const Capacity = styled("div")`
  background-color: white;
  color: rgba(0, 0, 0, 0.6);
  width: 50%;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); */
  display: flex;
  padding-left: 10px;
  justify-content: start;
  align-items: center;
  span {
    margin: 0 10px;
  }
`;

export const Counter = styled("div")`
  position: absolute;
  width: 150px;
  background-color: white;
  border: 1px solid orange;
  border-radius: 0 15px;
  padding: 10px 20px;
  bottom: -210%;
  right: 20%;
  max-width: 150px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  &.closed {
    display: none;
  }
`;

export const List = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ListItem = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`;
export const Sign = styled("div")`
  padding: 2px 8px;
  border: 1px solid orange;
`;

export const Button = styled("button")`
  padding: 0 20px;
  border: none;
  background-color: orange;
  color: white;
  font-weight: 600;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); */
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

export const Icon = styled("div")`
  /* padding: 10px 0 10px 20px; */
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); */
  /* border-radius: 15px 0 0 15px; */
  background-color: white;
  display: flex;
  justify-content: end;
  align-items: center;
`;
