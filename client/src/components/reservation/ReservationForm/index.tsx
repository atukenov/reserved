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
  Form,
  Button,
  ButtonContainer,
  Submitted,
  ThankYou,
  Message,
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
import useForm from "../../../utils/useForm";
import DatePicker from "../../common/DatePicker";
import moment from "moment";
import Input from "../../common/Input";

const ReservationForm = () => {
  const location = useLocation();
  const restaurant = location.state as Restaurant;
  const [step, setStep] = useState(1);
  const { formData, handleChange } = useForm({
    name: "",
    lastname: "",
    username: "",
    password: "",
    date: "",
  });

  const getForm = () => {
    switch (step) {
      case 1:
        formData.password = "";
        return <></>;
      case 2:
        formData.lastname = "";
        return (
          <>
            <Input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </>
        );
      case 3:
        formData.username = "";
        return (
          <>
            <Input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </>
        );
      case 5:
        return (
          <Submitted>
            <ThankYou>Thank you!</ThankYou>
            <Message>
              Your reservation <span>in process</span>, please wait!
            </Message>
          </Submitted>
        );
    }
  };

  const handleBack = (e: any) => {
    e.preventDefault();
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleNext = (e: any) => {
    e.preventDefault();

    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  };

  return (
    <>
      <Container>
        <h2>{restaurant.restaurantName}</h2>
        <hr />
        <StepsContainer>
          <Steps>
            <Step className={step > 1 ? "active" : step === 1 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faCalendar} size="2xl" />
              </Icon>
              <Status />
              <Title>Date</Title>
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
            </Step>
            <ProgressBar
              className={step > 3 ? "active" : step === 3 ? "current" : ""}
            />
            <Step className={step > 4 ? "active" : step === 4 ? "current" : ""}>
              <Icon>
                <FontAwesomeIcon icon={faUser} size="2xl" />
              </Icon>
              <Status />
              <Title>Guest</Title>
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
            </Step>
          </Steps>
        </StepsContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            {getForm()}
            <ButtonContainer>
              {step > 1 && step < 5 && (
                <Button onClick={handleBack} className="back">
                  Back
                </Button>
              )}
              {step === 4 && <Button type="submit">Submit</Button>}
              {step >= 1 && step < 4 && (
                <Button onClick={handleNext}>Next</Button>
              )}
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default ReservationForm;
