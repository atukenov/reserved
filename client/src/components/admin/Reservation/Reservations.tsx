import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getReservationsByRestaurantId,
  reservationSelector,
} from "../../../slices/reservationSlice";
import { userSelector } from "../../../slices/userSlice";
import { Spin, Table } from "antd";
import { Reservation } from "../../../utils/types";
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
    title: "Name",
    dataIndex: ["guest", "name"],
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: ["guest", "phoneNumber"],
    key: "phoneNumber",
  },
  {
    title: "Date",
    dataIndex: "reservationDate",
    key: "date",
    ellipsis: true,
    render: (date: string) => {
      return (
        <div style={{ overflowWrap: "inherit" }}>
          {moment(date, "YYYY-MM-DD").format("DD MMMM YYYY").toString()}
        </div>
      );
    },
  },
  {
    title: "Time",
    dataIndex: "reservationTime",
    key: "time",
  },
  {
    title: "# of Person",
    dataIndex: "partySize",
    key: "partySize",
  },
];

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
      />
    </Spin>
  );
};

export default Reservations;
