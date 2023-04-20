import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Formik, Form, FormikErrors } from "formik";
import * as Yup from "yup";

import {
  faCalendar,
  faCheck,
  faClock,
  faUser,
  faUtensils,
  // faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Button,
  ButtonContainer,
  ThankYou,
  Message,
  Wrapper,
  Step,
  Icon,
  Status,
  Title,
  ProgressBar,
} from "./styles";
import { Reservation, Restaurant, StepItem } from "../../../utils/types";
import FormItem from "../../common/FormItem";
import FormTimeSelect from "../../common/FormTimeSelect";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Spin } from "antd";
import {
  createReservation,
  reservationSelector,
} from "../../../slices/reservationSlice";

const items: StepItem[] = [
  {
    icon: <FontAwesomeIcon icon={faCalendar} size="2xl" />,
    title: "Date",
  },
  {
    icon: <FontAwesomeIcon icon={faUtensils} size="2xl" />,
    title: "Dinners",
  },
  {
    icon: <FontAwesomeIcon icon={faClock} size="2xl" />,
    title: "Time",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} size="2xl" />,
    title: "Guest",
  },
  {
    icon: <FontAwesomeIcon icon={faCheck} size="2xl" />,
    title: "Status",
  },
];

const ReservationForm = () => {
  const dispatch = useAppDispatch();
  const { loading, reservation } = useAppSelector(reservationSelector);
  const location = useLocation();
  const restaurant = location.state as Restaurant;
  const [step, setStep] = useState(1);

  const initialValues: Reservation = {
    _id: "",
    partySize: 1,
    reservationDate: "",
    reservationTime: "",
    restaurantId: restaurant._id,
    specialRequest: "",
    // tableId: "1",
    guest: {
      name: "",
      phoneNumber: "",
    },
  };

  const validation = Yup.object({
    restaurantId: Yup.string().required("What restaurant you want to reserve?"),
    // tableId: Yup.string().required("Did you choose table?"),
    reservationDate: Yup.string().required("Please choose the date"),
    partySize: Yup.number()
      .min(1, "At least one person needed")
      .required("Please specify how many of you will come."),
    reservationTime: Yup.string().required(
      "Please specify at what time you want to come."
    ),
    guest: Yup.object({
      name: Yup.string().required("Guest name is required."),
      phoneNumber: Yup.string().required("Phone numberis required."),
    }),
    // specialRequest: Yup.string(),
  });

  const handleNext = (e: any) => {
    e.preventDefault();
    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  };
  const handleBack = (e: any) => {
    e.preventDefault();
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const getStatus = (errors: FormikErrors<Reservation>) => {
    switch (step) {
      case 1:
        return !!errors.reservationDate;
      case 2:
        return !!errors.partySize;
      case 3:
        return !!errors.reservationTime;
      case 4:
        return !!errors.guest;
      default:
        return false;
    }
  };

  const forms = [
    <FormItem
      label="Date"
      name="reservationDate"
      type="date"
      min={moment().format("YYYY-MM-DD")}
    />,
    <FormItem label="Number of person" name="partySize" type="number" />,
    <FormTimeSelect label="Time" name="reservationTime" />,
    <>
      <FormItem label="Name" name="guest.name" type="text" />
      <FormItem label="Phone number" name="guest.phoneNumber" type="text" />
      <FormItem label="Special Request" name="specialRequest" type="textarea" />
    </>,
    <>
      <ThankYou>Thank you for your reservation.</ThankYou>
      {reservation && (
        <Link to={reservation._id}>
          <Message>
            Reservation ID is <span className="link">{reservation._id}</span>
          </Message>
        </Link>
      )}
      <Message>Wait for the status udpate.</Message>
    </>,
  ];

  return (
    <>
      <Spin spinning={loading}>
        <Container>
          <h2>{restaurant.restaurantName}</h2>
          <hr />
          <Wrapper>
            {items.map((item, index) => {
              return (
                <Step
                  key={index}
                  className={`${step === index + 1 ? "current" : ""} ${
                    index + 1 < step ? "active" : ""
                  }`}
                >
                  <Icon>{item.icon}</Icon>
                  <Status>
                    {index < 4 && (
                      <ProgressBar
                        className={`${step === index + 1 ? "current" : ""} ${
                          index + 1 < step ? "active" : ""
                        }`}
                      />
                    )}
                  </Status>
                  <Title>{item.title}</Title>
                </Step>
              );
            })}
          </Wrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values: Reservation) => {
              setStep((prev) => prev + 1);
              dispatch(createReservation(values));
            }}
            validateOnMount
          >
            {(props) => (
              <Form>
                {forms[step - 1]}
                <ButtonContainer>
                  {step > 1 && step < 5 && (
                    <Button onClick={handleBack} className="back">
                      Back
                    </Button>
                  )}
                  {step >= 1 && step < 4 && (
                    <Button
                      onClick={handleNext}
                      disabled={getStatus(props.errors)}
                    >
                      Next
                    </Button>
                  )}
                  {step === 4 && (
                    <Button type="submit" disabled={getStatus(props.errors)}>
                      Submit
                    </Button>
                  )}
                </ButtonContainer>
              </Form>
            )}
          </Formik>
          {/* <Form onSubmit={formik.handleSubmit}>{forms[step - 1]}</Form> */}
        </Container>
      </Spin>
    </>
  );
};

export default ReservationForm;
