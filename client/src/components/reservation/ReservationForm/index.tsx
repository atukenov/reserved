import React, { useState } from "react";

import { Restaurant } from "../../../utils/types";
import { useLocation } from "react-router-dom";
import {
  Container,
  Data,
  FormContainer,
  Icon,
  Status,
  Step,
  Steps,
  Number,
  Text,
  StepsContainer,
  Title,
  ProgressBar,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheck,
  faClock,
  faUser,
  faUtensils,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

const ReservationForm = () => {
  const location = useLocation();
  const restaurant = location.state as Restaurant;
  const [step, setStep] = useState(1);

  const getForm = () => {
    switch (step) {
      case 1:
        return "date";
      case 2:
        return "no. of dinner";
      case 3:
        return "time";
      case 4:
        return "guest";
      case 5:
        return "Waiting";
    }
  };

  return (
    <>
      <Container>
        <StepsContainer>
          <Steps>
            <Step className={step > 1 ? "active" : step === 1 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faCalendar} size="2xl" />
              </Icon>
              <Status />
              <Title>Date</Title>
              <Data>
                <Number></Number>
                <Text></Text>
              </Data>
            </Step>
            <ProgressBar
              className={step > 1 ? "active" : step === 1 ? "current" : ""}
            />
            <Step className={step > 2 ? "active" : step === 2 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faUtensils} size="2xl" />
              </Icon>
              <Status />
              <Title>Dinners</Title>
              <Data>
                <Number></Number>
                <Text></Text>
              </Data>
            </Step>
            <ProgressBar
              className={step > 2 ? "active" : step === 2 ? "current" : ""}
            />
            <Step className={step > 3 ? "active" : step === 3 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faClock} size="2xl" />
              </Icon>
              <Status />
              <Title>Time</Title>
              <Data>
                <Number></Number>
                <Text></Text>
              </Data>
            </Step>
            <ProgressBar
              className={step > 3 ? "active" : step === 3 ? "current" : ""}
            />
            <Step className={step > 4 ? "active" : step === 4 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faUser} size="2xl" />
              </Icon>
              <Status />
              <Title>Guest Details</Title>
              <Data>
                <Number></Number>
                <Text></Text>
              </Data>
            </Step>
            <ProgressBar
              className={step > 4 ? "active" : step === 4 ? "current" : ""}
            />
            <Step className={step > 5 ? "active" : step === 5 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faCheck} size="2xl" />
              </Icon>
              <Status />
              <Title>Waiting</Title>
              <Data>
                <Number></Number>
                <Text></Text>
              </Data>
            </Step>
          </Steps>
        </StepsContainer>
        <FormContainer>
          {getForm()}
          <button onClick={() => setStep(step - 1)}>Back</button>
          <button onClick={() => setStep(step + 1)}>Next</button>
        </FormContainer>
      </Container>
    </>
  );
};

export default ReservationForm;
