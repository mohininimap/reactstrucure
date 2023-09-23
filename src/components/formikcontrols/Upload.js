import React from "react";
import { ErrorMessage, Field } from "formik";
import "./FormikControl.scss";
import TextError from "./TextError";

const Upload = (props) => {
  const { label, name, onChange, newLabel,ref, req, disabled, ...rest } = props;
  return (
    <div className="form">
      <div className="form__content">
        <label className="form__content--label" htmlFor={name}>
          {label}
          {req ? <span className="form__content--label-span">*</span> : ""}
        </label>
        <div className="form__content--input" name={name} {...rest}>
          <label style={{ color: "grey", overflowWrap:"anywhere"}}>{newLabel}</label>
          <label htmlFor={name} className="form__content--input-label">
            <i className="fas fa-paperclip"></i>
          </label>
          <input
            className="form__content--input-file"
            onChange={onChange}
            type="file"
            id={name}
            name={name}
            ref={ref}
            disabled={disabled}
            accept="image/pdf/doc/docx/png/jpeg"
          />
        </div>
      </div>
      <ErrorMessage
        style={{ color: "oragered" }}
        className="form__content--error"
        name={name}
        component={TextError}
      />
    </div>
  );
};

export default Upload;
