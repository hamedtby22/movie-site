
import { Button } from '@mui/material';
import React from 'react';
import HeroSlide from '../components/HeroSlide';
import TrendMovies from '../components/TrendMovies';

import { category,movieType,tvType } from '../api/defApi';

const Home = () => {
  return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>فیلم های پرطرفدار</h2>
                        <Button sx={{fontWeight:'bold',fontFamily:'monospace'}}
                         href='/movie' color='error' variant='contained' className="small">بیشتر...</Button>                       
                    </div>
                    <TrendMovies category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>سریال های پرطرفدار</h2>                       
                        <Button sx={{fontWeight:'bold',fontFamily:'monospace'}}
                         href='/tv' color='error' variant='contained' className="small">بیشتر...</Button>                       
                    </div>
                    <TrendMovies category={category.tv} type={tvType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>سریال های دارای رتبه برتر</h2>                       
                        <Button sx={{fontWeight:'bold',fontFamily:'monospace'}}
                         href='/tv' color='error' variant='contained' className="small">بیشتر...</Button>                       
                    </div>
                    <TrendMovies category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
};

export default Home;
