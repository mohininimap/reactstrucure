import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Dates = (props) => {
    const {label, name, showTime=false,...rest} = props
    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}</label>
            <Field
                name={name}
                
            >
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field
                        return (
                            <DatePicker 
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                                showTimeSelect ={showTime}
                                className='form__content--input'
                            />
                        )
                    }
                }
            </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Dates
