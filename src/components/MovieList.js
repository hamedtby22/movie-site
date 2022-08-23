import React from 'react';
import { category} from '../api/defApi';
import BaseUrlCofig from '../api/BaseUrlConfig';
import { Link } from 'react-router-dom';
import './MovieList.scss';
import CustomButton from './button/CustomButton';

const MovieList = (props) => {
    
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const background = BaseUrlCofig.w500Image(item.poster_path || item.backdrop_path ||item.profile_path );

    return (
        <Link to={link}>
            <div className="card" style={{backgroundImage: `url(${background})` }}>
                {
                    item.vote_average !== 0 && item.vote_average && <h5>{item.vote_average}</h5>
                }
                
                    <CustomButton>
                         جزئیات
                    </CustomButton>
                
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

export default MovieList;