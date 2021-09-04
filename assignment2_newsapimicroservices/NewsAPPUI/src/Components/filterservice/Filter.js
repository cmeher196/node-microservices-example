import React from 'react';

export default class FilterService extends React.Component {

    getFilteredApi(data) {
        console.log(data);
        // return `https://newsapi.org/v2/top-headlines?category=business&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
        switch (data.endPoint) {
            case 'top-headlines':
                if (data.type === 'category')
                    return `http://localhost:8082/top-headlines?category=${data.category}&country=in`
                else if (data.type === 'country')
                    return `http://localhost:8082/top-headlines?country=${data.countryCode}`
                else
                    return `http://localhost:8082/top-headlines?category=${data.category}&country=${data.countryCode}`

            case 'sources':
                if (data.type === 'category')
                    return `http://localhost:3000/sources?category=${data.category}`
                else if (data.type === 'country')
                    return `http://localhost:3000/sources?country=${data.country}`
                else
                    return `http://localhost:3000/sources?category=${data.category}&country=${data.countryCode}`

            case 'everything':
                return `http://localhost:3000/everything?q=${data.searchText} `
            
            default:
                break;
        }
    }
}