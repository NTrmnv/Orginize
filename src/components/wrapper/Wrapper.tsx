import React from "react";
import {Header} from "../header/Header";

type WrapperPropsT = {
    children: React.ReactNode
}

export const Wrapper = ({children} : WrapperPropsT) => {
    return <>
        <Header/>
        <>{children}</>
    </>
}