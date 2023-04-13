import React from "react";
import { Container, Title, Wrapper } from "./styles";
import { SvgIcon } from "../SvgIcon";

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <SvgIcon width="100%" height="250px" shadow={true} />
        <Title>Try foods around the world.</Title>
      </Wrapper>
    </Container>
  );
};

export default Featured;
