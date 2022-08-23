import fetchClient from "./fetchClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    person: 'person'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',

}
export const personType = {
    popular: 'popular'
}

export const defApi = {
    
    getMovieList : (type,params) => {
        const url = 'movie/' + movieType[type];
        return fetchClient.get(url, params)
    },
    getTvList : (type,params) => {
        const url = 'tv/' + tvType[type];
        return fetchClient.get(url, params)
    },
    getVideos : (cate,id) => {
        const url = category[cate] + '/' + id + '/videos';
        return fetchClient.get(url, {params: {}})
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return fetchClient.get(url, params);
    },
    detail : (cate,id) => {
        const url = category[cate] + '/' + id;
        return fetchClient.get(url, {params: {}})
    },
    credits : (cate,id) => {
        const url = category[cate] + '/' + id + '/credits';
        return fetchClient.get(url, {params: {}})
    },
    similar : (cate,id) => {
        const url = category[cate] + '/' + id + '/similar';
        return fetchClient.get(url, {params: {}})
    },
    getPersonList : (type,params) => {
        const url = 'person/' + personType[type];
        return fetchClient.get(url, params)
    },
    getImages : (cate,id) => {
        const url = category[cate] + '/' + id + '/images';
        return fetchClient.get(url, {params: {}})
    }
}

export default defApi;