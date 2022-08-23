import { Button } from '@mui/material';
import React from 'react';
import footerMovies from '../assets/footerMovies.jpg';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__info'>
                <input type='text' placeholder='نام و نام خانوادگی' />
                <input type='text' placeholder='ایمیل' />
                <input type='text' placeholder='شماره تلفن' />
                <input type='text' placeholder='موضوع' />
                <textarea style={{margin:'20px'}} rows='15'cols='70'  placeholder='متن' />
                <Button variant='contained' sx={{margin:'10px'}} color='warning'>ارسال</Button>
            </div>
            <img src={footerMovies} className='contact__img' alt="logo" />
        </div>
    );
};

export default Contact;

