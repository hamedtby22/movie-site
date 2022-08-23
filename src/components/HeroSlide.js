import React,{useState,useEffect,useRef} from 'react';
import SwiperCore, {Autoplay} from 'swiper'
import defApi,{category,movieType} from '../api/defApi';
import BaseUrlCofig from '../api/BaseUrlConfig';
import {Swiper,SwiperSlide} from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Button} from '@mui/material';

import Modal, { ModalContent } from './Modal';
//style
import './HeroSlide.scss'

const HeroSlide = () => {
    SwiperCore.use([Autoplay])
    const [movieItems,setMovieItems] = useState([]);

    useEffect( () => {
        const getMovies = async() => {
            const params = {page:1}
            try{
                const response = await defApi.getMovieList(movieType.popular, {params})
                setMovieItems(response.results.slice(0,10));
                console.log(response)
            }
            catch {
                console.log('error');
            }
        }
        getMovies();
    },[])
    return (
        <div className='hero-slide'>
            <Swiper modules={[Autoplay]} autoplay={true} grabCursor={true} spaceBetween={0} slidesPerView={1} >
            {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            }
        </div>
    );
}

const HeroSlideItem = props => {

    let hisrory = useNavigate();

    const item = props.item;

    const background = BaseUrlCofig.originImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await defApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button color='error' 
                        sx={{border:'1px solid red',borderRadius:'20px',ml:'20px',fontFamily:'sans-serif'}}
                         variant='contained' onClick={() => hisrory('/movie/' + item.id)}>
                            الان ببینید
                        </Button>
                        <Button color='warning' 
                        sx={{border:'1px solid yellow', borderRadius:'20px',fontFamily:'sans-serif'}}
                         variant='contained' onClick={setModalActive}>
                            تریلر را تماشا کنید
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={BaseUrlCofig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src','');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlide;