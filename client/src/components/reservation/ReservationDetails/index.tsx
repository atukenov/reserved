import React, { useEffect, useState } from "react";
import {
  Container,
  Icon,
  ProgressBar,
  Status,
  Step,
  Title,
  Wrapper,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheck,
  faCheckDouble,
  faClock,
  faUser,
  faUtensils,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { StepItem } from "../../../utils/types";
import {
  getReservationById,
  reservationSelector,
} from "../../../slices/reservationSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { ExpandedRow } from "../../admin/Reservation/ExpandedRow";

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

const ReservationDetails = () => {
  const dispatch = useAppDispatch();
  const { reservationId } = useParams();
  const { loading, reservation } = useAppSelector(reservationSelector);
  const [step, setStep] = useState(5);

  useEffect(() => {
    dispatch(getReservationById(reservationId!));
  }, [reservationId, dispatch]);

  return (
    <Spin spinning={loading}>
      <Container>
        <Wrapper>
          {items.map((item, index) => {
            return (
              <Step
                key={index}
                className={`${
                  step === index + 1
                    ? reservation && reservation.status === "pending"
                      ? "current"
                      : reservation && reservation.status === "cancelled"
                      ? "cancelled"
                      : reservation && reservation.status === "confirmed"
                      ? "confirmed"
                      : ""
                    : ""
                } ${index + 1 < step ? "active" : ""}`}
              >
                <Icon>
                  {index + 1 < step ? (
                    <>{item.icon}</>
                  ) : reservation && reservation.status === "pending" ? (
                    <>{item.icon}</>
                  ) : reservation && reservation.status === "cancelled" ? (
                    <FontAwesomeIcon icon={faXmark} size="2xl" />
                  ) : reservation && reservation.status === "confirmed" ? (
                    <FontAwesomeIcon icon={faCheckDouble} size="2xl" />
                  ) : (
                    ""
                  )}
                </Icon>
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
        <hr />
        {reservation && <ExpandedRow data={reservation} button={false} />}
      </Container>
    </Spin>
  );
};

export default ReservationDetails;
