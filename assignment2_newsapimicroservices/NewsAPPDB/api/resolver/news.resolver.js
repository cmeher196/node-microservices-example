const news = require('../dao/news.dao');


const rootResolver ={
    ...news
}

module.exports = rootResolver