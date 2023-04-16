import React, { useState } from "react";
import { Segmented, SegmentedProps } from "antd";
import CreateRestaurantForm from "../../restaurants/RestaurantForm/CreateRestaurantForm";
import UpdateRestaurantForm from "../../restaurants/RestaurantForm/UpdateRestaurantForm";
import DeleteRestaurantForm from "../../restaurants/RestaurantForm/DeleteRestaurantForm";

interface crudProps {
  crudOption: string | number;
  type: string | number;
}

const initialValues: crudProps = {
  crudOption: "notChoosen",
  type: "notChoosen",
};

const Forms = {
  CreateRestaurant: <CreateRestaurantForm />,
  CreateMenu: <CreateRestaurantForm />,
  CreateTable: <CreateRestaurantForm />,
  UpdateRestaurant: <UpdateRestaurantForm />,
  DeleteRestaurant: <DeleteRestaurantForm />,
};

const Crud = () => {
  const [values, setValues] = useState<crudProps>(initialValues);

  const getForm = (values: crudProps) => {
    const component = `${values.crudOption}${values.type}`;
    return Forms[component as keyof typeof Forms];
  };

  return (
    <>
      <Segmented
        block
        options={["Create", "Update", "Delete"]}
        value={values.crudOption}
        onChange={(value) => setValues({ ...values, crudOption: value })}
      />
      {values.crudOption !== "notChoosen" && (
        <>
          <Segmented
            block
            options={["Restaurant", "Menu", "Table"]}
            value={values.type}
            onChange={(value) => setValues({ ...values, type: value })}
          />
          {values.type !== "notChoosen" && getForm(values)}
        </>
      )}
    </>
  );
};

export default Crud;
