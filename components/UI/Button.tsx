import React from 'react'
import { IconType } from 'react-icons'
interface ButtonProps {
    text: string,
    className: string,
    icon?: IconType;
}

const Button = ({ text, className, icon: Icon }: ButtonProps) => {
    return (
        <button className={`${className}`}>
            {text}
            {Icon && <Icon size={20} className="ml-2" />}
        </button>
    )
}

export default Button