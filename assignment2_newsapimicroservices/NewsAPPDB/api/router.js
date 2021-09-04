const router = require('express').Router();
const controller = require('./controller/news.controller')
const { graphqlHTTP } = require('express-graphql')
const graphqlNewsRootResolver = require('./resolver/news.resolver');
const graphQlSchema = require('./controller/news.schema');
// router.post('/readlater',controller.readLater); //newsDB
// router.get('/readnow',controller.readNow); //newDB

router.use('/readLater', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphqlNewsRootResolver,
    graphiql: true
}))

router.use('/readNow', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphqlNewsRootResolver,
    graphiql: true
}))

module.exports = router;