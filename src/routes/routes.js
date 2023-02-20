import {HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE} from "./consts";
import {Login} from "../components/login/Login";
import {SignUp} from "../components/signup/SignUp";
import {Home} from "../components/home/Home";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Login
    }
]

export const privateRoutes = [
    {
        path: SIGNUP_ROUTE,
        Element: SignUp
    },
    {
        path: HOME_ROUTE,
        Element: Home
    }
]
