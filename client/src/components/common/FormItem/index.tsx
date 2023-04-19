import React, { ReactNode } from "react";
import { ErrorMessage } from "formik";
import { CustomField, Wrapper, Label, CustomError } from "./styles";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  min?: string;
  max?: string;
  type: string;
  as?: any;
  children?: ReactNode;
}

const FormItem: React.FC<Props> = ({ label, children, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{label}</Label>
      <CustomField {...props}>{children}</CustomField>
      <CustomError>
        <ErrorMessage name={props.name} />
      </CustomError>
    </Wrapper>
  );
};

export default FormItem;
