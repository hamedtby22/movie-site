import React,{useEffect,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import defApi from '../../api/defApi';
import BaseUrlCofig from '../../api/BaseUrlConfig';

//icons
import FolderImage from '@mui/icons-material/Filter';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';

//components
import CastList from './CastList';
import VideoList from './VideoList';
import TrendMovies from '../TrendMovies';

//styles
import './Details.scss';

const Detailss = (props) => {

    const history = useNavigate();
    const {category, id} = useParams();
    const [items,setitems] = useState([]);


    useEffect(() => {
        let getDetailss = async () => {
            const response = await defApi.detail(category, id, {params:{}});
            setitems(response);
            window.scrollTo(0,0)
        }
        getDetailss()

    },[category,id])

    const bg = BaseUrlCofig.originImage(items.backdrop_path || items.poster_path);
    const bg_poster = BaseUrlCofig.originImage(items.poster_path || items.backdrop_path || items.profile_path);
    
    const moreImages = () => {
        history(`/${category}/${id}/images`)
    }
    
    return (
        <div className={props.transparent ? 'light' : 'dark'}>
            {
                items && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${bg})`}}>
                            <div className="mb-3 movie-content container">
                                <div className="movie-content__poster">
                                    <div className="movie-content__poster__img" style={{backgroundImage: `url(${bg_poster})`}}>
                                    {
                                        items.profile_path &&
                                        <span title='تصاویر بیشتر' onClick={moreImages}>
                                            <FolderImage sx={{width:'35px', height:'35px',borderRadius: '0 30px 0 10px',color:'#FF6701', padding:'20px'}} /></span>
                                    }
                                    </div>
                                </div>
                                <div className="movie-content__info">
                                    <h1 className="title">
                                        {items.title || items.name}
                                    </h1>
                                    <div className="genres">
                                        {
                                            items.genres ? items.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i} className="genres__items">{genre.name}</span>
                                            ))
                                            :
                                            items.biography ? <div><h2>زندگینامه</h2><p>{items.biography}</p></div> : null
                                        }
                                    </div>
                                    <p className="overview">{items.overview}</p>
                                    <div className="cast">
                                        <div className="section__header">
                                            {
                                                items.birthday ? <div><h2>تاریخ تولد</h2><h2>{items.birthday}</h2></div> :null
                                            }
                                            <div className="section__header">
                                            {
                                                items.vote_average ? <div>{items.vote_average}</div> :null
                                            }
                                            </div>
                                            <div className='section__header'>
                                                {
                                                    items.place_of_birth ? <div><h2>محل تولد</h2><h4>{items.place_of_birth}</h4></div> : null
                                                }
                                            </div>
                                        </div>
                                        <CastList id={items.id}/> 
                                    </div>
                                    <div className='links'>
                                        {
                                            category !== 'person' && 
                                            <Button color='warning' sx={{fontSize:'20px'}}>
                                                لینک دانلود
                                                <DownloadIcon />
                                            </Button>
                                        }                                   
                                        {
                                            props.addFavorite && category!=='person' && <Button color='warning' sx={{fontSize:'20px'}} onClick={() =>props.addFavorite(items)}>
                                            افزودن به علاقه مندی ها
                                            <FavoriteBorder />
                                        </Button>
                                        }               
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={items.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>فیلم های مرتبط</h2>
                                </div>
                                <TrendMovies category={category} type="similar" id={items.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Detailss;

// : <Button color='warning' sx={{fontSize:'20px'}} onClick={() =>props.removeFavorite(items)}>
// خذف از علاقه مندی ها
// <FavoriteIcon />
// </Button>