import React, { ChangeEvent, useEffect } from "react";
import Input from "../Input";

interface Props {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<Props> = ({ name, value, onChange }) => {
  return <Input name={name} type="date" value={value} onChange={onChange} />;
};

export default DatePicker;
