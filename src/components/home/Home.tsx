import React, {useEffect} from 'react';
import {ToDo} from "../toDo/ToDo";
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../routes/consts";

export const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentUser = location.state?.currentUser;

    useEffect(() => {
        if (!currentUser) {
            navigate(LOGIN_ROUTE)
        }
    }, [currentUser, navigate])

    return currentUser && <ToDo currentUser={currentUser}/>
}
