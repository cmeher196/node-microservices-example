const { buildSchema } = require('graphql')


const schema = buildSchema(
    `
        type News{
            _id: ID!
            newsHeading : String!
            newsImage : String!
            newsDescription : String!
            newsAuthor : String!
            newsSource : String!
            newsUser : String!
        }
        input newsInput{
            newsHeading : String!
            newsImage : String!
            newsDescription : String!
            newsAuthor : String!
            newsSource : String!
            newsUser : String!
        }
        type RootQuery{
            readNow : [News!]!
        }
        type RootMutation{
            readLater (newsInput : newsInput) : News!
        }
        schema{
            query:RootQuery,
            mutation:RootMutation
        }
    `
)

module.exports = schema;