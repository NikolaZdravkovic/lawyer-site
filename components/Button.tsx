import React from 'react'
import { ButtonProps } from '@/types'

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, handleClick }: ButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
           <span className={`flex-1 ${textStyles}`}>{title}</span>
        </button>
    )
}

export default Button