import axios from 'axios';
import queryString from 'query-string';
import BaseUrlCofig from './BaseUrlConfig';

const fetchClient = axios.create({
    baseURL: BaseUrlCofig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: BaseUrlCofig.apikey}) 
})

fetchClient.interceptors.request.use(async (config) => config);
fetchClient.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data
    }
    return response

}, (error) => {
    throw error
})

export default fetchClient;