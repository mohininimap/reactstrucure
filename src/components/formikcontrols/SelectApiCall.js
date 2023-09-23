import React from 'react'
import { ErrorMessage, useField } from 'formik';
import ReactSelect from 'react-select'
import TextError from './TextError';
import './FormikControl.scss';

const SelectWithApi = (props) => {
  const { label, name, options, form, req, onChange, defaultValue } = props;
  const field = useField(props)[0];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? '#a2dafd' : 'white',

    }),
    menu: (provided, state) => ({
      ...provided,
      overflow: "hidden",
      borderBottom: '1px dotted pink',
      maxHeight: name === "resource" ? 110 : "auto",
      width: 300,
      marginLeft: -1,
    }),
    control: () => ({
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: '1fr 45px',
      width: 300,
      height: 40,
      overflow: "hidden"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
    }),
    container: (provided) => ({
      ...provided,
      height: "17px"
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      height: "17px",
      marginTop: "12px",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  }

  const getValue = () => {
    if (options) {
      const data = options.find(option => option.value === field.value)
      return data
    }
  }

  return (
    <div className='form'>
      <div className='form__content'>
        <label className='form__content--label' htmlFor={name}>{label}
          {req ? <span className='form__content--label-span'>*</span> : ''}
        </label>
        <ReactSelect
          name={field.name}
          onChange={(option) => {
            onChange(form, field, option)
          }}
          options={options}
          placeholder='Select'
          styles={customStyles}
          value={getValue()}
          className='form__content--input'
          defaultValue={defaultValue}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default SelectWithApi

