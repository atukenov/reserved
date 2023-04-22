import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createUser } from "../../../slices/userSlice";
import { User } from "../../../utils/types";
import { useForm } from "antd/lib/form/Form";
import data from "../../../assets/content/Data.json";
import {
  getAllRestaurants,
  restaurantSelector,
} from "../../../slices/restaurantSlice";

const Card = styled.div`
  box-shadow: 0px 0px 4px gray;
  padding: 10px;
  margin-top: 10px;
`;

interface SelectProps {
  label: string;
  value: string;
}

const CreateUserForm = () => {
  const dispatch = useAppDispatch();
  const { restaurants } = useAppSelector(restaurantSelector);
  const [form] = useForm();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  const getRestaurants = () => {
    let data: SelectProps[] = [];
    if (restaurants) {
      restaurants.forEach((item) => {
        data.push({
          label: item.restaurantName,
          value: item._id,
        });
      });
    }
    return data;
  };

  const onFinish = (values: User) => {
    dispatch(createUser(values));
  };

  return (
    <Card>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter username." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter email." },
            { type: "email", message: "Must be email format." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please enter Phone Number." },
            {
              min: 12,
              max: 12,
              message: "Phone number must be 12 length",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Admin of restaurant" name="adminRestaurantId">
          <Select placeholder="Choose Restaurant" options={getRestaurants()} />
        </Form.Item>
        <Form.Item label="Role" name="role">
          <Select placeholder="Choose user role" options={data.roles} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateUserForm;
