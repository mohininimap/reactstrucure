import React from 'react'

const TextError = (props) => {
    console.log("props",props)
    return (
        <div style={{marginLeft:props.children=="Invalid Email Address"?"60px":""}} className='errorMessage'>{props.children}</div>
    )
}
export default TextError;
