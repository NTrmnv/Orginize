import React from "react";
import './Input.scss'

type inputPropsT = {
    name: string,
    type: string,
    onChange: (e:any) => void,
    placeholder?: string
}
export const Input = (props: inputPropsT) => {

    return <>
        <input
            className={'input'}
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    </>
}