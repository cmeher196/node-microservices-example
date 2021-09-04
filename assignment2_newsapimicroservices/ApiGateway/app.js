const express = require('express');
const app = express();
const httpProxy = require('http-proxy-middleware');
const config = require('./config')
const cors = require('cors');

app.use(cors())

proxyNews = httpProxy.createProxyMiddleware({
    target: config.news_url,
    pathRewrite: { '^/news/': "/" }
})

proxyReadNews = httpProxy.createProxyMiddleware({
    target: config.read_news_url,
    pathRewrite: { '^/readNews/': "/" }
})

proxyAuthUser = httpProxy.createProxyMiddleware({
    target: config.users_url,
    pathRewrite: { '^/login/': "/" }
})


app.get('/', (req, res) => {
    res.send('Api Gateway!! you are here!!')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
app.use('/news', proxyNews)
app.use('/readNews', proxyReadNews)
app.use('/login', proxyAuthUser)
app.use('/register', proxyAuthUser)
app.use('/isAuthenticated', proxyAuthUser)

module.exports = app;