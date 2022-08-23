import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../assets/bg.jpg';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

import './Footer.scss';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
        <div className="footer__content container">
            <div className="footer__content__logo">
                <div className="logo">
                    <Link to="/">Drow Film</Link>
                    <IconButton color='warning' size='large'>
                        <TheaterComedyIcon />
                    </IconButton>
                </div>
            </div>
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <Link to="/">خانه</Link>
                    <Link to="/">تماس با ما</Link>
                    <Link to="/">خدمات</Link>
                    <Link to="/">درباره ی ما</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to="/">پخش زنده</Link>
                    <Link to="/">سوالات</Link>
                    <Link to="/">شحصی سازی</Link>
                    <Link to="/">حریم خصوصی</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to="/">شما باید تماشا کنید</Link>
                    <Link to="/">فیلم های جدید</Link>
                    <Link to="/">بالاترین امتیاز</Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;