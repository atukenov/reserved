import React, { useState } from "react";
import { Segmented } from "antd";
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
    /**
			* getForm
			* TODO need to change to <[type]Form />
			* TODO and create for every type form with crud.
			* TODO and add spinning to them

		*/

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
