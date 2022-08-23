import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import defApi, {category} from '../api/defApi';
import { Swiper, SwiperSlide } from 'swiper/react';

import './TrendMovies.scss'
import MovieList from './MovieList';

const TrendMovies = (props) => {
    
    const [items,setItems] = useState([]);

    useEffect(() => {
        const takeList = async () => {
            let response = null;
            let params = {};
            if(props.type !== 'similar') {
                switch(props.category) {
                    case category.movie :
                        response = await defApi.getMovieList(props.type, {params});
                    break;

                    default:
                        response = await defApi.getTvList(props.type, {params});
                }
            } else {
                response = await defApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        takeList();

    },[]);

    return (
        <div className='container'>
            <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
                {
                    items.map((item,i) => (                       
                        <SwiperSlide key={i}>
                            <MovieList item={item} category={props.category} />
                        </SwiperSlide>
                    ))                   
                }
            </Swiper>
        </div>
    );
};

TrendMovies.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default TrendMovies;