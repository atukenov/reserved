import styled from "styled-components";

import { Field, ErrorMessage } from "formik";

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CustomField = styled(Field)`
  background-color: white;
  border: 1px solid orange;
  max-width: 400px;
  &::-webkit-datetime-edit {
  }
  &::-webkit-datetime-edit-fields-wrapper {
  }
  &::-webkit-datetime-edit-text {
  }
  &::-webkit-datetime-edit-month-field {
  }
  &::-webkit-datetime-edit-day-field {
  }
  &::-webkit-datetime-edit-year-field {
  }
  &::-webkit-inner-spin-button {
  }
  &::-webkit-calendar-picker-indicator {
  }
`;

export const CustomError = styled.div`
  color: red;
`;

export const Time = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  gap: 10px;
`;
export const Option = styled.div`
  border: 1px solid gray;
  padding: 5px 10px;
  &.active {
    background-color: orange;
    color: white;
  }
`;
