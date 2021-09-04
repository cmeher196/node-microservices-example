const should = require('chai').should();
const expect = require('chai').expect;
const chai = require('chai');
let assert = require('chai').assert;
const request = require('supertest');

const app = require('../app');

let token = "";
describe('Test Suite for User and Auth',()=>{
    it('it should get all users', (done)=>{
        request(app)
        .get('/auth/v1/users')
        .send({query:`{user{_id,fullName,userName,emailID,mobile}}`})
        .expect(200)
        .end((err,res)=>{
            res.body.data.user[0].should.have.property('userName');
        })
        done();
    })

    it('it should create/register a new user', (done)=>{
        request(app)
        .post('auth/v1/users')
        .send({query:`
        mutation{
            register(userInput:{
              userName:"meher196",
              fullName:"Chandra Babu",
              emailID : "meher96@gmail.com",
              password:"helloWorld",
              mobile:"9934123212"
            })
            {
              _id,
              userName,
              emailID
            }
          }
        `})
        .expect(201)
        done();
    })

    it('it should login a new user and receive token', (done)=>{
        request(app)
        .get('/auth/v1/users')
        .send({query:
            `{login(email:"mehercpm96@gmail.com", password:"@chandra1996")
            {
                  userID,
                  token,
                  tokenExpiration,
                  fullName
                }
              }
            `
        })
        .expect(200)
        .end((err,res)=>{
            token = res.body.data.login.token;
            res.body.data.login.should.have.property('token')
        })
        done()
    })


    it('it should Authenticate user based on token', (done)=>{
        request(app)
        .get('/auth/v1/users')
        .send({query:
            `{
                isAuthenticated(token:"${token}")
                {
                  isAuthenticated
                }
              }`
        })
        .expect(200)
        .end((err,res)=>{
            res.body.data.isAuthenticated.should.have.property('isAuthenticated')
        })
        done();
    })
})
