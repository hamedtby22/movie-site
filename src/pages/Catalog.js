import React from 'react';
import { useParams } from 'react-router-dom';

import TitlePage from '../components/titlePage';
import Movies from './Movies';

const Catalog = () => {

    const {category} = useParams();
    
    return (
        <>
            <TitlePage>
                {category === 'movie' ? <h2>فیلم ها</h2> :
                 category === 'tv' ? <h2>سریال ها</h2> :
                 category === 'person' ? <h2>هنرمندان</h2> :null
                }
            </TitlePage>
            <div className='container'>
                <div className='section mb-3'>
                    <Movies category={category} />
                </div>
            </div>
        </>
    );
};

export default Catalog;