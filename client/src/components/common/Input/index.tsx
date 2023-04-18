import React, { ChangeEvent } from "react";
import { CustomInput, Label } from "./styles";
import { placeholder } from "@babel/types";

interface Props {
  label?: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ label, type, name, value, onChange }) => {
  return (
    <>
      <Label>{label}</Label>
      <CustomInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        // placeholder={placeholder}
      />
    </>
  );
};

export default Input;
