import React from 'react'
import { ErrorMessage, Field } from 'formik';
import './FormikControl.scss'
import TextError from './TextError';
const TextArea = (props) => {
    const {label,large, name, req, ...rest} = props;
    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}
            {req ? <span className='form__content--label-span'>*</span>: ''}
            </label>
            <Field className={large ? 'form__content--input-1 text-area' : 'form__content--input text-area'} as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default TextArea
