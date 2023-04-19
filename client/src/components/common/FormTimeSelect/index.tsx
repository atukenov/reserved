import React, {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ErrorMessage } from "formik";
import {
  CustomField,
  Wrapper,
  Label,
  CustomError,
  Option,
  Time,
} from "./styles";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  min?: string;
  max?: string;
  type?: string;
  as?: any;
  children?: ReactNode;
}
interface Hour {
  value: string;
  active: boolean;
}

const items: Hour[] = [];
for (let hour = 10; hour <= 23; hour++)
  items.push({ value: `${hour.toString()}:00`, active: false });

const FormTimeSelect: React.FC<Props> = ({ label, children, ...props }) => {
  const [hours, setHours] = useState<Hour[]>(items);

  useEffect(() => {}, [hours]);

  return (
    <Wrapper>
      <Label htmlFor={props.name}>{label}</Label>
      <CustomField {...props}>
        {(formProps: any) => (
          <Time>
            {hours.map((hour, index) => {
              return (
                <Option
                  onClick={() => {
                    formProps.form.setFieldValue(props.name, hour.value);
                    const newItems = hours.map((c, i) => {
                      if (c.active === true && i !== index) {
                        c.active = false;
                        return c;
                      }
                      if (i === index) {
                        c.active = true;
                        return c;
                      }
                      return c;
                    });
                    setHours(newItems);
                  }}
                  key={index}
                  className={hour.active ? "active" : ""}
                >
                  {hour.value}
                </Option>
              );
            })}
          </Time>
        )}
      </CustomField>
      <CustomError>
        <ErrorMessage name={props.name} />
      </CustomError>
    </Wrapper>
  );
};

export default FormTimeSelect;
