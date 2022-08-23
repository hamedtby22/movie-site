import React, { useEffect, useState } from 'react';
import defApi from '../../api/defApi';

const CastsInfo = (props) => {

    const [info,setInfo] = useState([]);

    useEffect(() => {
        const information = async() => {
            const response = await defApi.getInfo(props.id)
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default CastsInfo;