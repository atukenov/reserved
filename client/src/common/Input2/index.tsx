import { withTranslation } from "react-i18next";
import { StyledInput } from "./styles";
import { InputProps } from "../types";
import { Input as I2 } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";

//https://freefrontend.com/react-input-text/

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => (
  <>
    <div style={{ position: "relative" }}>
      <StyledInput {...props} id={props.name} />
      <span className="focus-border" />
    </div>
    <div style={{ minHeight: "22px" }}>
      {props.validate?.touched && props.validate?.errors ? (
        <Fade>
          <span style={{ color: "darkred" }}>{props.validate.errors}</span>
        </Fade>
      ) : null}
    </div>
  </>
);

export default withTranslation()(Input);
