import React from "react";
import './Button.scss';

type ButtonPropsT = {
    content: string,
    color: 'purple-lavender' | 'peach' | 'blue',
    size: 'small' | 'middle' | 'large'
}

export const Button = (props: ButtonPropsT) => {
    return <button className={`button button-${props.color} button-${props.size}`}>{props.content}</button>
}