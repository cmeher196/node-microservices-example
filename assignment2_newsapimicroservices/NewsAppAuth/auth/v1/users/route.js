const router = require('express').Router();
const userController = require('../users/controller/users.controller');
const graphqlSchema = require('./controller/users.schema');
const graphqlUserRootResolver = require('./resolver/users.resolver');
const { graphqlHTTP } = require('express-graphql');


router.use('/', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlUserRootResolver,
    graphiql: true
}))

module.exports = router;
