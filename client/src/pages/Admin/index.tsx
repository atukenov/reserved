import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadUser, userSelector } from "../../slices/userSlice";
import { Spin } from "antd";

const Admin = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector(userSelector);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Spin spinning={loading}>
        {user && <h5>Welcome, {user.username}</h5>}
        <Outlet />
      </Spin>
    </>
  );
};

export default Admin;
