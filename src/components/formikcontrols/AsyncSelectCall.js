import React from 'react'
import { ErrorMessage, useField } from 'formik';
import AsyncSelect from 'react-select/async'
import TextError from './TextError';
import './FormikControl.scss';

const AsyncSelectCall = (props) => {
    const {label, name, loadOptions, form, isMulti=false} = props;
    const field = useField(props)[0];
    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            isMulti?
                option.map(item => item.value):
                option.value
        )
    }

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? '#a2dafd' : 'white',
          
        }),
        menu: (provided, state) => ({
            ...provided,
            
            borderBottom: '1px dotted pink',
            maxHeight: 150,
            width:300,
            marginLeft:-1,
            overflow: 'hidden'
          }),
        control: () => ({
          display:'grid',
          gridAutoFlow:'column',
          gridTemplateColumns:'1fr 45px',
          width: 300,
          height: 30,
          overflow: "hidden",
          

        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}
            <span className='form__content--label-span'>*</span></label>
            <AsyncSelect
                name={field.name} 
                onChange={onChange}
                isMulti={isMulti}
                loadOptions={() => loadOptions()}
                placeholder='Select'
                styles={customStyles}
                defaultOptions
                cacheOptions
                className='form__content--input'
            />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default AsyncSelectCall

