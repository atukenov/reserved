import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, InputNumber } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { createRestaurant } from "../../../slices/restaurantSlice";
import { Restaurant } from "../../../utils/types";
import { useForm } from "antd/lib/form/Form";

const Card = styled.div`
  box-shadow: 0px 0px 4px gray;
  padding: 10px;
  margin-top: 10px;
`;

const CreateRestaurantForm = () => {
  const dispatch = useAppDispatch();
  const [form] = useForm();

  const onFinish = (values: Restaurant) => {
    dispatch(createRestaurant(values));
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
          label="Restaurant Name"
          name="restaurantName"
          rules={[{ required: true, message: "Please enter restaurant name." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter location." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name={["contactDetails", "phoneNumber"]}
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
        <Form.Item
          label="Email"
          name={["contactDetails", "email"]}
          rules={[
            { required: true, message: "Please enter email." },
            {
              type: "email",
              message: "Must have email format.",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Hours of Operation" name="hoursOfOperation">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
              message: "Please enter type of your restaurant.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Table Capacity"
          name="tableCapacity"
          rules={[
            { required: true, message: "Please enter number of tables." },
            { type: "number", message: "Must be a number." },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>
        {/* <Form.Item label="Upload Images" valuePropName="images">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>d
            </div>
          </Upload>
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateRestaurantForm;
