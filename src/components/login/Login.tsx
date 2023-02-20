import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Input} from "../base/Input/Input";
import {Checkbox} from "../base/Radio/Checkbox";
import './Login.scss'
import {Button} from "../base/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {HOME_ROUTE, SIGNUP_ROUTE} from "../../routes/consts";
import {testPassword, testUsername} from "../../utils/utils";

type RequiredFields = 'username' | 'password';
type ValidateFieldsT = {
    [F in RequiredFields]: {
        isValid: boolean,
        textError: string
    }
}

export const Login = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false)
    const [loginFields, setLoginFields] = useState({username: '', password: ''});
    const [touchedFields, setTouchedFields] = useState<ValidateFieldsT>({
        password: {isValid: true, textError: ""},
        username: {isValid: true, textError: ""}
    })
    const navigate = useNavigate();

    const watchValidate = (selector: Partial<ValidateFieldsT>) => {
        setTouchedFields(prevState => ({...prevState, ...selector}))
    }

    const currentUser = localStorage.getItem(loginFields.username);
    const handleSubmit = () => {
        return JSON.parse(currentUser || '{}').password === loginFields.password &&
            navigate(HOME_ROUTE, {state: { currentUser: loginFields.username}})
    }

    return <div className={'login'}>
        <div className={'login-header'}>{t('login')}</div>
        <form className={'login-form'} onSubmit={(e)=> {
            handleSubmit();
            e.preventDefault();
        }}>
            <span>{t('username')}</span>
            <Input
                name={'username'}
                type={'text'}
                size={"large"}
                placeholder={`${t('enterUsernamePlaceholder')}`}
                onChange={(e)=> {
                    setLoginFields({...loginFields, username: e.target.value});
                    watchValidate({username: {
                            isValid: testUsername(e.target.value),
                            textError: t('enterCorrectUsername')
                        }})
                }}
                onBlur={() => watchValidate({username: {
                        isValid: loginFields.username.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.username.isValid}
                textError={touchedFields.username.textError}
            />
            <span>{t('password')}</span>
            <Input
                name={'password'}
                size={"large"}
                type={showPassword ? 'text' :'password'}
                placeholder={`${t('enterPasswordPlaceholder')}`}
                onChange={(e)=> {
                    setLoginFields({...loginFields, password: e.target.value});
                    watchValidate({password: {
                            isValid: testPassword(e.target.value),
                            textError: t('enterCorrectPassword')
                        }})
                }}
                onBlur={() => watchValidate({password: {
                        isValid: loginFields.password.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.password.isValid}
                textError={touchedFields.password.textError}
            />
            {loginFields.password && <div className={'login-show'}><Checkbox onChange={() => {
                setShowPassword(!showPassword)
            }}/>{t('showPassword')}</div>}
            <Button
                color={'peach'}
                content={t('submit')}
                size={'large'}
                disabled={!loginFields.username || !loginFields.password}
                onClick={() => handleSubmit()}
            />
        </form>
        <div>{t('firstTime')}<Link to={SIGNUP_ROUTE}>{t('signUp')}</Link></div>
    </div>
}