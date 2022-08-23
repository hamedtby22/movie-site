import React from 'react';
import loading from '../images/spinner.gif';
const Loader = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Loader;