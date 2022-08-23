import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import BaseUrlCofig from '../../api/BaseUrlConfig';
import defApi from '../../api/defApi';


const CastList = props => {

    const {category} = useParams();
    const [casts, setCasts] = useState([]);


    useEffect(() => {
        const getCredits = async () => {
            const res = await defApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 4));
        }
        getCredits();
    }, [category, props.id]);
    
    // const handleMore = async() => {
    //     const res = await defApi.credits(category, props.id);
    //     setCasts(res.cast.slice(0,7));
    // }


    return (
        <div className="casts">  
            {
                casts.map((items, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${BaseUrlCofig.w500Image(items.profile_path)})`, borderRadius:'10px'}}></div>
                        <p className="casts__item__name">{items.name}</p>
                    </div>
                ))             
            }
            {/* {
                casts ? <Button color='warning' onClick={(id) =>handleMore(id)}><More /></Button> : null
            } */}
            
       </div>
    );
}

export default CastList;