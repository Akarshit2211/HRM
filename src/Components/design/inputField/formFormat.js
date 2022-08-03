import React from 'react';

const formFormat = (elType, type, placeholder, val) => {
    return({
        elementType: elType,
        elementConfig: {
            type: type,
            placeholder: placeholder
        },
        value: val,
        validation: {
            required: true
        },
        valid: false,
        touched: false
    })
}

export default formFormat;