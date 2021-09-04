const axios = require("axios")

const getAllNew = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=in&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
    return await getNewsFromAPI(api);
}

const createApiForTopHeadline = async (query) => {

    if (Object.keys(query).length == 2) {
        api = `https://newsapi.org/v2/top-headlines?category=${query.category}&country=${query.country}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
        return await getNewsFromAPI(api)
    }
    else if (Object.keys(query).length == 1) {
        let result = []
        switch (Object.keys(query)[0]) {
            case 'category':
                api = `https://newsapi.org/v2/top-headlines?category=${query.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
                result = await getNewsFromAPI(api);
                break;
            case 'country':
                api = `https://newsapi.org/v2/top-headlines?country=${query.country}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
                result = await getNewsFromAPI(api);
                break;
            default:
                break;
        }
        return result
    }
}

const createApiForSources = async (query) => {
    let api = ""
    if (Object.keys(query).length == 2) {
        api = `https://newsapi.org/v2/sources?category=${query.category}&country=${query.country}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
        return await getNewsFromAPI(api)
    }
    else if (Object.keys(query).length == 1) {
        let result = []
        switch (Object.keys(query)[0]) {
            case 'category':
                api = `https://newsapi.org/v2/sources?category=${query.category}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
                result = await getNewsFromAPI(api);
                break;
            case 'country':
                api = `https://newsapi.org/v2/sources?country=${query.country}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
                result = await getNewsFromAPI(api);
                break;
            default:
                break;
        }
        return result
    }
}
const createApiForEverything = async (query) => {
    if (query.q != undefined) {
        api = `https://newsapi.org/v2/everything?q=${query.q}&apikey=7dee10e8c7844bde81b49e2e4596d0ac&page=1`
        return await getNewsFromAPI(api);
    }
}

const getNewsFromAPI = async (api) => {
    try {
        let response = await axios.get(api);
        let result = await response.data
        return result
    } catch (error) {
        error.message = `something went wrong ${error}`
        return error.message;
    }
}

module.exports = {
    createApiForTopHeadline,
    createApiForSources,
    createApiForEverything,
    getAllNew
}