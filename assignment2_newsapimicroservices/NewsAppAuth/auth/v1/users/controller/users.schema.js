const {buildSchema} = require('graphql')


module.exports = buildSchema(`
        type User{
            _id : ID!
            userName : String!
            fullName :String!
            emailID : String!
            password : String!
            mobile : String!
        }
        input userInput{
            userName : String!
            fullName : String!
            emailID : String!
            password : String!
            mobile : String!
        }
        type AuthData{
            userID : ID!
            token : String!
            tokenExpiration : Int!
            fullName : String!
        }
        type TokenResponse{
            isAuthenticated : Boolean!
        }
        type RootQuery{
            user:[User!]!
            login(email:String!, password:String!): AuthData!
            isAuthenticated(token:String!) : TokenResponse
        }
        type RootMutation{
            register(userInput : userInput): User!
        }
        schema{
            query: RootQuery
            mutation: RootMutation
        }
`);