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
import { ExpandedRow } from "./ExpandedRow";

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
