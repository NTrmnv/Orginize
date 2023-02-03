import React from "react";
import './Input.scss'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type inputPropsT = {
    name: string,
    type: string,
    onChange: (e:any) => void,
    placeholder?: string,
    error?: boolean,
    textError?: string,
    onBlur?: (e:any) => void
}
export const Input = (props: inputPropsT) => {

    return <>
        <input
            className={`input input-${props.error ? 'error' : ''}`}
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
        />
        {props.textError && props.error && <span className={'input-error__message'}>{props.textError}</span>}
    </>
}