import React, { useState } from 'react'
import { Field, ErrorMessage, useField } from 'formik';
import TextError from './TextError';
import './FormikControl.scss';

const Radio = (props) => {
    const {label, name, req, options, l1, form, grid, ...rest} = props;
    const field = useField(props)[0];
    const [newValue, setNewValue] = useState('');
  const onChange = (e) => {
    form.setFieldValue(field.name, e.target.value);
    setNewValue(e.target.value)
  };

    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}
            {req ? <span className='form__content--label-span'>*</span>: ''}
            </label>
            <div className={`${grid == 2 ? 'anit-1' : 'anit'}`}>
            <div className='form__content--radio' name={name} {...rest}>
                { options.map(option => {
                            // console.log(field.value, 'fff')
                            // console.log((option.value), 'ooo')
                            return (
                                <div className='form__content--input-sec' key={option.key}>
                                    <input 
                                        type='radio' 
                                        id={option.key} 
                                        value={option.value}
                                        onChange={onChange}
                                        checked={field.value == option.value}
                                        name={name}
                                    />
                                    <label style={{marginBottom:'0', fontSize:'1.1rem'}} htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
            </div></div>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Radio
