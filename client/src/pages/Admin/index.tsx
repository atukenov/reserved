import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadUser, userSelector } from "../../slices/userSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector(userSelector);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (!user) navigate("login");
  }, [user, navigate]);

  return (
    <>
      <Spin spinning={loading}>
        {user && (
          <>
            <h5>Welcome, {user.username}</h5>
          </>
        )}
        <Outlet />
      </Spin>
    </>
  );
};

export default Admin;
