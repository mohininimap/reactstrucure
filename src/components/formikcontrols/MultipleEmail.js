import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import "./FormikControl.scss";
import Chip from "@material-ui/core/Chip";
import TextError from "./TextError";
function MultipleEmail(props) {
  const { label, large, name, req, setTypes, types, ...rest } = props;
  const [eye, setEye] = useState("fa fa-eye");

  const passtext = () => {
    if (types == "password") {
      setTypes("text");
      setEye("fas fa-eye-slash");
    } else {
      setTypes("password");
      setEye("fa fa-eye");
    }
  };
  return (
    <div className="form">
      <div className="form__content">
        <label className={large ? "form__content--label-email": "form__content--label"} htmlFor={name}>
          {label}
          {req ? <span className="form__content--label-span">*</span> : ""}
        </label>
        <Field
          className={large ? "form__content--input-email":"form__content--input"}
          id={name}
          name={name}
          {...rest}
        />
        {label == "Password" ? (
          <i className={`${eye} form__content--i`} onClick={passtext}></i>
        ) : (
          ""
        )}
      </div>
      <ErrorMessage
        style={{ color: "oragered" }}
        className="form__content--error"
        name={name}
        component={TextError}
      />
    </div>
  );
}
export default MultipleEmail;
