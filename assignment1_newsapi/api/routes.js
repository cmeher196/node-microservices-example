const router = require('express').Router()
const app = require('../app');

const newsController = require('./controller/news.controller');

router.get('/top-headlines',newsController.topHeadlines) //newsSource
router.get('/sources',newsController.sources)
router.get('/everything',newsController.everything)

module.exports = router;