const apiService = require('../services/news.service')


const topHeadlines = async (req,res,next) =>{
    let result = await apiService.createApiForTopHeadline(req.query);
    res.send(result)
}

const sources = async (req,res,next) =>{
    let result =await apiService.createApiForSources(req.query);
    res.send(result)
}

const everything = async (req,res,next) =>{
    let result =await apiService.createApiForEverything(req.query)
    res.send(result)
}

module.exports={
    topHeadlines,
    sources,
    everything
}