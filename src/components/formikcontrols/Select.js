import React from "react";
import { ErrorMessage, useField } from "formik";
import ReactSelect from "react-select";
import TextError from "./TextError";
import "./FormikControl.scss";

const Select = (props) => {
  const { label, name, options, value, form, req, isMulti = false, customChange, isCustomChange = false } = props;
  const field = useField(props)[0];
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
    if (isCustomChange) {
      customChange(option.value)
    }

  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#a2dafd" : "white",

    }),
    menu: (provided, state) => ({
      ...provided,

      borderBottom: "1px dotted pink",
      height: 'auto',
      overflow: "hidden",
      width: 300,
      height:200,
      marginLeft: -1,
      maxHeight: name === "reason" ? 110 : (name === "invoice_date" ? 150 : "auto"),
      overflowY: 'scroll',
    }),

    control: () => ({
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "4fr 1fr",
      width: 290,
    }),
    valueContainer: () => ({
      overflow: "hidden",
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      position: "relative",
      alignItems: "center",
      boxSizing: "border-box",
      caretColor: "transparent",
      maxHeight: "80px",

    }),
    indicatorsContainer: () => ({
      display: "flex",
      marginLeft: "auto",
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const getValue = () => {
    const type = typeof options;
    const type2 = typeof field?.value;
    if (type === "object") {
      if (options !== undefined || options !== null) {
        return isMulti
          ? options?.filter((option) =>
            type2 === "number"
              ? field?.value?.toString()?.indexOf(option?.value) >= 0
              : field?.value?.indexOf(option?.value) >= 0
          )
          : options?.find((option) => option?.value === field?.value);
      } else {
        return isMulti ? [] : "";
      }
    } else {
      return isMulti ? [] : "";
    }
  };

  return (
    <div className="form">
      <div className="form__content">
        <label className="form__content--label" htmlFor={name}>
          {label}
          {req ? <span className="form__content--label-span">*</span> : ""}
        </label>
        <ReactSelect
          name={field.name}
          onChange={onChange}
          isMulti={isMulti}
          realonly
          options={options}
          placeholder="Select"
          styles={customStyles}
          value={getValue()}
          className="form__content--input"
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
