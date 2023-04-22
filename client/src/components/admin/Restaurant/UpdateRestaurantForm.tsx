import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, Input, Button, InputNumber, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getAllRestaurants,
  restaurantSelector,
  updateRestaurant,
} from "../../../slices/restaurantSlice";
import { Restaurant } from "../../../utils/types";
import data from "../../../assets/content/Data.json";

const Card = styled.div`
  box-shadow: 0px 0px 4px gray;
  padding: 10px;
  margin-top: 10px;
`;

const UpdateRestaurantForm = () => {
  const dispatch = useAppDispatch();
  const { restaurants } = useAppSelector(restaurantSelector);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({ ...restaurant });
  }, [restaurant, form]);

  const handleSelection = (value: string) => {
    // form.resetFields();
    setRestaurant(restaurants?.find((p) => p._id === value));
  };

  const onFinish = (values: Restaurant) => {
    dispatch(updateRestaurant(values));
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
        <Form.Item label="Restaurant" name="_id">
          <Select
            showSearch
            placeholder="Search to Select"
            onChange={handleSelection}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={restaurants?.map((item) => {
              return {
                value: item._id,
                label: item.restaurantName,
              };
            })}
          />
        </Form.Item>
        <Form.Item
          label="Restaurant Name"
          name="restaurantName"
          rules={[{ required: true, message: "Please enter restaurant name." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter restaurant description." },
          ]}
        >
          <Input.TextArea />
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
        <Form.Item label="Tags for Restaurant" name="tags">
          <Select
            mode="tags"
            placeholder="Tags for restaurants"
            options={data.tags}
          />
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateRestaurantForm;
