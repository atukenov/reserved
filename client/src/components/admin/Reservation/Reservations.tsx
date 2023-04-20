import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getReservationsByRestaurantId,
  reservationSelector,
  updateReservation,
} from "../../../slices/reservationSlice";
import { userSelector } from "../../../slices/userSlice";
import { Button, Descriptions, Spin, Table } from "antd";
import { Reservation, Status } from "../../../utils/types";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";

const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      switch (status) {
        case "pending":
          return <div style={{ color: "orange" }}>Pending</div>;
        case "confirmed":
          return <div style={{ color: "green" }}>Confirmed</div>;
        case "cancelled":
          return <div style={{ color: "red" }}>Cancelled</div>;
      }
    },
  },
  {
    title: "Date",
    dataIndex: "reservationDate",
    key: "date",
    ellipsis: true,
    render: (date: string, record: Reservation) => {
      return (
        <div>
          {`🗓️ ${moment(date, "YYYY-MM-DD").format("DD MMM")} / 🕑 ${
            record.reservationTime
          }`}
        </div>
      );
    },
  },
];
interface ExpandedRowProps {
  data: Reservation;
}
const ExpandedRow: FC<ExpandedRowProps> = ({ data }) => {
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
        <Descriptions.Item label={`${getEmoji()}Status"`}>
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
      {data.status === Status.Pending && (
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

const Reservations = () => {
  const dispatch = useAppDispatch();
  const { loading, reservations } = useAppSelector(reservationSelector);
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    if (user) dispatch(getReservationsByRestaurantId(user.adminRestaurantId!));
  }, [dispatch, user]);

  const getData = () => {
    const data: any[] = [];
    reservations?.forEach((item, index) => {
      data.push({
        ...item,
        key: index,
      });
    });
    return data;
  };

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={getData()}
        columns={columns}
        size="small"
        scroll={{ x: true }}
        bordered
        expandable={{
          expandedRowRender: (record) => <ExpandedRow data={record} />,
        }}
      />
    </Spin>
  );
};

export default Reservations;
