const BaseUrlCofig={
    baseUrl:'https://api.themoviedb.org/3/',
    apikey: '52d485e17388e88921ef56a39e13db02',
    originImage: (imageUrl) => `https://image.tmdb.org/t/p/original/${imageUrl}`,
    w500Image: (imageUrl) => `https://image.tmdb.org/t/p/w500/${imageUrl}`,
}

export default BaseUrlCofig;