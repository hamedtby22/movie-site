import { Button } from '@mui/material';
import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const handleSignUp = () => {
        history('/sign-up')
    }
    return (
        <div className='formcontainer'>
            <div className='formcontainer__info'>
                <input placeholder='شماره تلفن' />
                <div className='formcontainer__info__btn'>
                    <Button variant='contained' color='warning'>دریافت کد تاییدیه</Button>
                    <Button variant='contained' color='error' onClick={handleSignUp}>ثبت نام</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;