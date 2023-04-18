import React from "react";
import { StepItem } from "../../../utils/types";
import { Icon, ProgressBar, Status, Step, Title, Wrapper } from "./styles";

interface Props {
  steps: StepItem[];
  children?: React.ReactNode;
}

const Steps: React.FC<Props> = ({ steps, children }) => {
  return (
    <Wrapper>
      {steps.map((step, index) => {
        return (
          <Step>
            <Icon>{step.icon}</Icon>
            <Status>{index < 4 && <ProgressBar />}</Status>
            <Title>{step.title}</Title>
          </Step>
        );
      })}
    </Wrapper>
  );
};

export default Steps;
