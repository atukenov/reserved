import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadUser, userSelector } from "../../slices/userSlice";
import { Spin } from "antd";

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
            <h4>Welcome, {user.username}</h4>
            <h4>You are {user.role} of "restaurant"</h4>
          </>
        )}
        <Outlet />
      </Spin>
    </>
  );
};

export default Admin;
