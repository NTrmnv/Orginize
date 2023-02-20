import React, {useState} from "react";
import './SignUp.scss';
import {Input} from "../base/Input/Input";
import {useTranslation} from "react-i18next";
import {Button} from "../base/Button/Button";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../../routes/consts";
import {Checkbox} from "../base/Radio/Checkbox";
import {testEmail, testPassword, testUsername} from "../../utils/utils";

type RequiredFields = 'username' | 'mail' | 'password' | 'repeatPassword';
type ValidateFieldsT = {
    [F in RequiredFields]: {
        isValid: boolean,
        textError: string
    }
}
export const SignUp = () => {
    const {t} = useTranslation();
    const [signupFields, setSignupFields] = useState({username: '', mail: '', password: '', repeatPassword: ''});
    const [showPassword, setShowPassword] = useState(false);

    const [touchedFields, setTouchedFields] = useState<ValidateFieldsT>({
        mail: {isValid: true, textError: ""},
        password: {isValid: true, textError: ""},
        username: {isValid: true, textError: ""},
        repeatPassword: {isValid: true, textError: ""},
    });

    const watchValidate = (selector: Partial<ValidateFieldsT>) => {
        setTouchedFields(prevState => ({...prevState, ...selector}))
    }


    return <div className={'signup'}>
        <div className={'signup-header'}>{t('signUp')}</div>
        <form>
            <span>{t('enterUsername')}</span>
            <Input
                name={'username'}
                size={"large"}
                type={'text'}
                placeholder={'Bagurgle'}
                onChange={(e)=> {
                    setSignupFields({...signupFields, username: e.target.value});
                    watchValidate({username: {
                        isValid: testUsername(e.target.value),
                        textError: t('enterCorrectUsername')
                    }})
                }}
                onBlur={() => watchValidate({username: {
                        isValid: signupFields.username.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.username.isValid}
                textError={touchedFields.username.textError}
            />
            <span>{t('enterMail')}</span>
            <Input
                name={'email'}
                size={"large"}
                type={'email'}
                placeholder={'murlock@gmail.com'}
                onChange={(e)=> {
                    setSignupFields({...signupFields, mail: e.target.value});
                    watchValidate({mail: {
                            isValid: testEmail(e.target.value),
                            textError: t('enterCorrectMail')
                        }})
                }}
                onBlur={() => watchValidate({mail: {
                        isValid: signupFields.mail.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.mail.isValid}
                textError={touchedFields.mail.textError}
            />
            <span>{t('enterPassword')}</span>
            <Input
                name={'password'}
                size={"large"}
                type={showPassword ? 'text' :'password'}
                placeholder={'********'}
                onChange={(e)=> {
                    setSignupFields({...signupFields, password: e.target.value});
                    watchValidate({password: {
                            isValid: testPassword(e.target.value),
                            textError: t('enterCorrectPassword')
                    }})
                }}
                onBlur={() => watchValidate({password: {
                        isValid: signupFields.password.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.password.isValid}
                textError={touchedFields.password.textError}
            />
            <span>{t('repeatPassword')}</span>
            <Input
                name={'password'}
                size={"large"}
                type={showPassword ? 'text' :'password'}
                placeholder={'********'}
                onChange={(e)=> {
                    setSignupFields({...signupFields, repeatPassword: e.target.value});
                    watchValidate({repeatPassword: {
                            isValid: testPassword(e.target.value),
                            textError: t('enterCorrectPassword')
                        }})
                }}
                onBlur={() => watchValidate({repeatPassword: {
                        isValid: signupFields.repeatPassword.length > 0,
                        textError: `* ${t('required')}`
                    }})}
                error={!touchedFields.repeatPassword.isValid}
                textError={touchedFields.repeatPassword.textError}
            />
            {signupFields.password && signupFields.repeatPassword && <div className={'signup-show'}><Checkbox onChange={() => {
                setShowPassword(!showPassword)
            }}/>{t('showPassword')}</div>}
            {signupFields.password !== signupFields.repeatPassword && <div className={'signup-error'}>{t('passwordsDoNotMatch')}</div>}
        <Button
            disabled={!signupFields.mail || !signupFields.username || signupFields.password !== signupFields.repeatPassword}
            content={t('submit')}
            color={"peach"}
            size={"large"}
            onClick={() => {
                localStorage.setItem(signupFields.username, JSON.stringify(
                    {
                        name: signupFields.username,
                        mail: signupFields.mail,
                        password: signupFields.password
                    }))
            }}
        />
        </form>
        <div>{t('haveAccount')}<Link to={LOGIN_ROUTE}>{t('login')}</Link></div>
    </div>
}