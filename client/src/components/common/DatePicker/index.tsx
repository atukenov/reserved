import React, { ChangeEvent, useEffect } from "react";

interface Props {
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<Props> = ({ name, value, onChange }) => {
  return <input name={name} type="date" value={value} onChange={onChange} />;
};

export default DatePicker;
