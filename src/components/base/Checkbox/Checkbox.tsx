import React from "react";
import './Checkbox.scss';

type CheckboxT = {
    onClick: () => void
}

export const Checkbox = (props: CheckboxT) => {
    return <input className={'checkbox'} type="checkbox" onClick={props.onClick}/>
}