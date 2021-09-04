const should = require('chai').should();
const expect = require('chai').expect;
const chai = require('chai');
let assert = require('chai').assert;
const request = require('supertest');

const app = require('../app');

describe("Test Suite for Read News", ()=>{
    it('it should get news from read later', (done)=>{
        request(app)
        .post('/api/readNow')
        .send({query:'{readNow{newsAuthor,newsHeading}}'})
        .expect(200)
        .end((err,res) => {
            res.body.data.readNow[0].should.have.property('newsAuthor');
        })
        done();
    })

    it('it should post news for read later', (done)=>{
        request(app)
        .post('/api/readLater')
        .send({query:'mutation{readLater(newsInput:{newsHeading:"THEEEE new news news news",newsImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1541963463532-d68292c34b19%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&tbnid=2eIb5BjhQiiZzM&vet=12ahUKEwjauMqXkbPxAhVikUsFHeruAgoQMygAegUIARDQAQ..i&docid=nBiD9BWYMB87aM&w=1000&h=1498&itg=1&q=images&ved=2ahUKEwjauMqXkbPxAhVikUsFHeruAgoQMygAegUIARDQAQ",newsDescription:"news Description",newsAuthor :"Chandra",newsSource:"TOI",newsUser:"Chandra Prakash Meher"}){_id,newsDescription}}'})
        .expect(201)
        .end((err,res) => {
            res.body.data.readLater.should.have.property('newsDescription');
        })
        done();
    })
})