import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, InputNumber } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { getRestaurantById } from "../../../slices/restaurantSlice";

const Card = styled.div`
  box-shadow: 0px 0px 4px gray;
  padding: 10px;
  margin-top: 10px;
`;

const CreateRestaurantForm = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRestaurantById("sd"));
  }, [dispatch]);
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
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
          rules={[{ required: true, message: "Please enter Phone Number." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name={["contactDetails", "email"]}
          rules={[{ required: true, message: "Please enter email." }]}
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
