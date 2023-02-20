import React from "react";
import './Input.scss'

type inputPropsT = {
    name: string,
    type: string,
    onChange: (e:any) => void,
    placeholder?: string,
    error?: boolean,
    textError?: string,
    onBlur?: (e:any) => void,
    size: 'small' | 'middle' | 'large',
    value?: string,
    onKeyDown?: (e:any) => void
}
export const Input = ({name, type, onChange, placeholder, error, textError, onBlur, size, value, onKeyDown}: inputPropsT) => {

    return <>
        <input
            className={`input input-${error ? 'error' : ''} input-${size}`}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onKeyDown={onKeyDown}
        />
        {textError && error && <span className={'input-error__message'}>{textError}</span>}
    </>
}