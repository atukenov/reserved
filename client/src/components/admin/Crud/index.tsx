import React, { useState } from "react";
import { Segmented, SegmentedProps } from "antd";
import CreateRestaurantForm from "../../restaurants/RestaurantForm/CreateRestaurantForm";

interface crudProps {
  crudOption: string | number;
  type: string | number;
}

const initialValues: crudProps = {
  crudOption: "notChoosen",
  type: "notChoosen",
};

const Crud = () => {
  const [values, setValues] = useState<crudProps>(initialValues);

  const getForm = (values: crudProps) => {
    return <CreateRestaurantForm />;
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
            options={["Restaurants", "Menu", "Tables"]}
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
