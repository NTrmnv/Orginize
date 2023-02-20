import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../routes/consts";
import {useTranslation} from "react-i18next";

export const Header = () => {
    const {t} = useTranslation();

    return <nav className={'header'}>
        <div className={'header-inner'}>
            <Link to={HOME_ROUTE}>{t('home')}</Link>
        </div>
    </nav>
}