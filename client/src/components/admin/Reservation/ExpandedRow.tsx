import { Button, Descriptions } from "antd";
import moment from "moment";
import { useAppDispatch } from "../../../app/hooks";
import { Reservation, Status } from "../../../utils/types";
import { FC } from "react";
import { updateReservation } from "../../../slices/reservationSlice";

interface ExpandedRowProps {
  data: Reservation;
  button?: boolean;
}
export const ExpandedRow: FC<ExpandedRowProps> = ({ data, button }) => {
  const dispatch = useAppDispatch();
  const handleApprove = () => {
    const newData = { ...data, status: Status.Confirmed };
    dispatch(updateReservation(newData));
  };
  const handleDecline = () => {
    const newData = { ...data, status: Status.Cancelled };
    dispatch(updateReservation(newData));
  };

  const getEmoji = () => {
    switch (data.status) {
      case "confirmed":
        return "✅";
      case "cancelled":
        return "❌";
      default:
        return "🗯️";
    }
  };
  return (
    <>
      <Descriptions title="🔒 Reservation Info">
        <Descriptions.Item label={`${getEmoji()} Status"`}>
          {data.status?.toUpperCase()}
        </Descriptions.Item>
        <Descriptions.Item label="🗓️ Date">
          {moment(data.reservationDate, "YYYY-MM-DD").format("DD MMMM YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="🕑 Time">
          {data.reservationTime}
        </Descriptions.Item>
        <Descriptions.Item label="👥 # of Person">
          {data.partySize}
        </Descriptions.Item>
      </Descriptions>
      <hr />
      <Descriptions title="👤 Guest">
        <Descriptions.Item label="📌 Name">
          {data.guest?.name}
        </Descriptions.Item>
        <Descriptions.Item label="📱 Phone Num.">
          {data.guest?.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="📝 Special Req.">
          {data.specialRequest}
        </Descriptions.Item>
      </Descriptions>
      {data.status === Status.Pending && button !== false && (
        <>
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={handleApprove}
          >
            Approve
          </Button>
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={handleDecline}
          >
            Decline
          </Button>
        </>
      )}
    </>
  );
};
