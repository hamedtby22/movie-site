import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import BaseUrlCofig from '../api/BaseUrlConfig';
import DeleteIcon from '@mui/icons-material/Delete'
import './Favorite.scss'
import { category } from '../api/defApi';
const Favorite = ({favorites,removeFavorite}) => {

    const history = useNavigate();

    const handleDetails = (id) => {
        history(`/${category}/${id}`)
    }
    return (
        <>
        {
            favorites.length === 0 ? <h1 style={{padding:'40px',textAlign:'center'}}>لیست علاقه مندی شما خالی می باشد</h1>
            :(
            <div className='favorite_Container'>
                {
                    favorites.map((fav,i) =>(
                        <div key={i} className='favorite'>
                            <img src={BaseUrlCofig.w500Image(fav.poster_path)} alt={fav.title} />
                            <div className='info'>
                                <h2>فیلم {fav.name || fav.title}</h2>
                                <p>{fav.overview}</p>
                                <div className="genres">
                                    {
                                        fav.genres && fav.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__items">{genre.name}</span>
                                        ))
                                            
                                    }
                                </div>
                            </div>
                            <Button sx={{width:'30px', height:'200px', color:'inherit'}} onCLick={handleDetails}><DownloadIcon /></Button>
                            <Button sx={{width:'30px', height:'200px', color:'inherit', fontFamily:'Times New Roman',fontWeight:'bold'}}
                             onClick={() =>removeFavorite(fav.id)}>خذف از لیست علاقه مندی<DeleteIcon /></Button>
                        </div>
                    ))
                }
            </div>
            )
        }
        </>
    );
};

export default Favorite;