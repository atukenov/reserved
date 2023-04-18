import { ChangeEvent, useState } from "react";

interface FormData {
  [key: string]: string;
}

const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    handleChange,
  };
};

export default useForm;
