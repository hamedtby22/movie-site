import { Button } from '@mui/material';
import React from 'react';
import './SignUp.scss';

const SignUp = () => {
    return (
        <>
            <form className='formcontrol'>
                    <div className='formcontrol__info'>
                        <input type='text' placeholder='نام' />
                        <input type='text' placeholder=' نام خانوادگی' />
                    </div>
                    <div className='formcontrol__info'>
                        <input type='email' placeholder='ایمیل' />
                        <input type='text' placeholder='شماره همراه' />
                    </div>
                    <div className='formcontrol__info'>
                        <input type='password' placeholder='پسورد' />
                        <input type='password' placeholder='تکرار پسورد' />
                    </div>
                    <div className='formcontrol__btn'>
                        <Button variant='contained' color='error' sx={{width:'200px'}}>ثبت نام</Button>
                    </div>
            </form>           
        </>
    );
};

export default SignUp;