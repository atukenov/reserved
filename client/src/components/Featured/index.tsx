import React from "react";
import { Container, Title, Wrapper } from "./styles";
import { SvgIcon } from "../SvgIcon";

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <SvgIcon src="connected-world.svg" width="100%" height="250px" />
        <Title>Try foods around the world.</Title>
      </Wrapper>
    </Container>
  );
};

export default Featured;
