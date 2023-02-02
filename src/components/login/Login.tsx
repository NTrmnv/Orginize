import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Input} from "../base/Input/Input";
import {Checkbox} from "../base/Checkbox/Checkbox";
import './Login.scss'
import {Button} from "../base/Button/Button";

export const Login = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false)
    const [loginFields, setLoginFields] = useState({username: '', password: ''})

    return <div className={'login'}>
        <div className={'login-header'}>{t('login')}</div>
        <form className={'login-form'}>
            <span>{t('username')}</span>
            <Input name={'username'} type={'text'} placeholder={`${t('enterUsernamePlaceholder')}`} onChange={(e) => setLoginFields({...loginFields, username: e.target.value})}/>
            <span>{t('password')}</span>
            <Input name={'password'} type={showPassword ? 'text' :'password'} placeholder={`${t('enterPasswordPlaceholder')}`} onChange={(e) => setLoginFields({...loginFields, password: e.target.value})}/>
            {loginFields.password && <div className={'login-show'}><Checkbox onClick={() => {
                setShowPassword(!showPassword)
            }}/>{t('showPassword')}</div>}
        </form>
        <Button color={'peach'} content={t('submit')} size={'large'}/>
        <div>{t('firstTime')}</div>
    </div>
}