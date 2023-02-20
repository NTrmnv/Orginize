import React from "react";
import './Checkbox.scss';

type CheckboxT = {
    checked?: boolean,
    onChange: () => void
}

export const Checkbox = ({ checked, onChange }: CheckboxT) => {
    return <input className={'checkbox'} type="checkbox" checked={checked} onChange={onChange}/>
}