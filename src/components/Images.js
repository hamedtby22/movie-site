import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BaseUrlCofig from '../api/BaseUrlConfig';
import defApi from '../api/defApi';
import DisLike from '@mui/icons-material/ThumbDown'
import Like from '@mui/icons-material/ThumbUp'
import { ToastContainer} from 'react-toastify';

import './Images.scss'
import { toastType } from './Toast';


const Images = () => {

    const {category,id} = useParams();
    const [items,setitems] = useState([]);
    const successNotify = () => {
        toastType('success', 'امتیاز با موفقیت ثبت شد')
    }
    const errorNotify = () => {
        toastType('error', 'امتیاز با موفقیت ثبت شد')
    }

    useEffect(() => {
        let getImages = async () => {
            const response = await defApi.getImages(category, id, {params:{}});
            setitems(response.profiles);
        }
        getImages();

    },[category,id]);

    return (
        <div className='imageContainer'>
            {
                items.map((item) => (
                    <div key={id} className='images'>
                        <img src={BaseUrlCofig.w500Image(item.file_path)} alt={item.vote_average} />
                        <div className='like'>
                            <DisLike color='error' sx={{cursor:'pointer'}} onClick={errorNotify}/>
                            <Like color='success' sx={{cursor:'pointer'}} onClick={successNotify}  />
                        </div>
                    </div>
                ))
            }
            <ToastContainer />
        </div>
    );
};

export default Images;