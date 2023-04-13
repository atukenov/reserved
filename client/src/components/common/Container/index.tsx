import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/types";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const ResponsiveContainer = styled.div`
  width: 100%;

  padding: 20px 20px;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    padding: 20px 120px;
  }
  @media ${device.laptop} {
    padding: 20px 200px;
  }
  @media ${device.desktop} {
    padding: 20px 300px;
  }
`;

const Container: React.FC<Props> = ({ children, title }) => {
  return (
    <ResponsiveContainer>
      <h1>{title}</h1>
      {children}
    </ResponsiveContainer>
  );
};

export default Container;
