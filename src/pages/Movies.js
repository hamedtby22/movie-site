
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//components
import defApi, { category, movieType, tvType, personType } from '../api/defApi';
import CustomButton from '../components/button/CustomButton';
import MovieList from '../components/MovieList';

import './Movies.scss';

const Movies = (props) => {
    
    const [items,setItems] = useState([]);
    const [page,setPage] = useState(1);
    const [totalpage,setTotalpage] = useState(0);
    const {keyword} = useParams();
    
    useEffect(() => {
        const getMovie = async () => {
            let response = null;           
            if(keyword ===undefined) {
                const params = {};
                switch(props.category) {
                    case category.movie:
                    response = await defApi.getMovieList(movieType.popular, {params});
                    break;

                    case category.tv:
                        response = await defApi.getTvList(tvType.popular, {params});
                    break;

                    default:
                        response = await defApi.getPersonList(personType.popular, {params});                                         
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await defApi.search(props.category, {params})
            }
            setItems(response.results);
            setTotalpage(response.total_pages)
        }
        getMovie();
    },[props.category, keyword]);

    const loadmore = async () => {
        let response = null;           
            if(keyword ===undefined) {
                const params = {
                    page: page + 1
                };
                switch(props.category) {
                    case category.movie:
                        response = await defApi.getMovieList(movieType.upcoming, {params});
                    break;
                    
                    case category.tv:
                        response = await defApi.getTvList(tvType.popular, {params});
                    break;

                    default:
                        response = await defApi.getPersonList(personType.popular, {params});                   
                }
            } else {
                const params = {
                    page: page + 1,
                    query: keyword
                }
                response = await defApi.search(props.category, {params})
            }
            setItems([...items, ...response.results]);
            setPage(page + 1);
    }
    
    return (
        <>
            <div className='movies'>
                {
                    items.map((item,i) =>(
                        <MovieList category={props.category} item={item} key={i} />
                    ))
                }
            </div>
            {
                
                page < totalpage ? (
                    <div className='movies__loadmore'>
                        <CustomButton onClick={loadmore}>Load More</CustomButton>
                    </div>
                )
                :
                null
            }
        </>
    );
};

export default Movies;