import React from "react";
import './Button.scss';

type ButtonPropsT = {
    content: string,
    color: 'purple-lavender' | 'peach' | 'blue',
    size: 'small' | 'middle' | 'large',
    disabled?: boolean,
    onClick?: () => void
}

export const Button = (props: ButtonPropsT) => {
    return <button onClick={props.onClick} className={`button button-${props.color} button-${props.size} button-${props.disabled ? 'disabled' : ''}`}>{props.content}</button>
}