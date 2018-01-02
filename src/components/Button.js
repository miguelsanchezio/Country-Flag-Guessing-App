import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button
            type='submit'
            className='btn'
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
