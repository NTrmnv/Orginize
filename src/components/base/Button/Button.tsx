import React from "react";
import './Button.scss';

type ButtonPropsT = {
    content: string,
    color: 'purple-lavender' | 'peach' | 'blue',
    size: 'small' | 'middle' | 'large',
    disabled?: boolean,
    onClick?: () => void
}

export const Button = ({content, color, size, disabled, onClick}: ButtonPropsT) => {
    return <button
        onClick={onClick}
        className={`button button-${color} button-${size} button-${disabled ? 'disabled' : ''}`}>
        {content}
    </button>
}