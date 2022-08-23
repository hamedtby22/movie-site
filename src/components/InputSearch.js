import Search from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';
import React from 'react';

import './InputSearch.scss';

const InputSearch = (props) => {
    return (
        <div className='search'>
            <TextField
                type='text'                 
                color='warning'
                placeholder='جستجوی فیلم و سریال...'
                value={props.searchBox} 
                onChange={props.handleSearch} />

            <Search color='inherit'
            onClick={props.SearchType} 
            sx={{ padding:'8px', borderRadius:'10px 0px 0px 10px', cursor:'pointer', backgroundColor:'#F25244'}} />
        </div>
    );
};

export default InputSearch;