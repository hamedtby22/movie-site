import React from 'react';

import './titlePage.scss';

const titlePage = (props) => {
    return (
        <div className='title'>
            <h2>{props.children}</h2>
        </div>
    );
};

export default titlePage;