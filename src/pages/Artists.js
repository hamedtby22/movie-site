import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//components
import defApi, { category, castsType } from '../api/defApi';
import CustomButton from '../components/button/CustomButton';
import CastsList from '../components/CastsList';



const Artists = (props) => {
    
    const [items,setItems] = useState([]);
    const [page,setPage] = useState(1);
    const [totalpage,setTotalpage] = useState(0);
    const {keyword} = useParams();
    const {fav,setFav} = props;
    
    useEffect(() => {
        const getCasts = async () => {
            let response = null;
            
            if(keyword ===undefined) {
                const params = {};
                switch(props.category) {
                    case category.casts:
                    response = await defApi.getCasts(castsType.popular, {params});
                    break;
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
        getCasts();
    },[props.category, keyword]);

    const loadmore = async () => {
        let response = null;           
            if(keyword ===undefined) {
                const params = {
                    page: page + 1
                };
                switch(props.category) {
                    case category.casts:
                    response = await defApi.getCasts(castsType.popular, {params});
                    break;
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
    
    const addFavorite = (items) => {
        const newAddFavorite = [...fav, items];
        setFav(newAddFavorite)
    }

    return (
        <>
            <div className='Artists'>
                {
                    items.map((item,i) =>(
                        <CastsList addFavorite={addFavorite} category={props.category} item={item} key={i} />
                    ))
                }
            </div>
            {
                
                page <totalpage ? (
                    <div className='Artists__loadmore'>
                        <CustomButton onClick={loadmore}>Load More</CustomButton>
                    </div>
                )
                : 
                null
            }
        </>
    );
};

// const Artistsearch = (props) => {
//     const [keyword,setkeyword] = useState(props.keyword ? props.keyword : '')
//     <InputSearch 
//     type="text" 
//     value={keyword} 
//     placeholder='Enter keyword' 
//     onChange={(event) =>setkeyword(event.target.value)} />
// }
export default Artists;