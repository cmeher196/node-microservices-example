const should = require('chai').should();
const expect = require('chai').expect;
const chai = require('chai');
let assert = require('chai').assert;
const request = require('supertest');

const app = require('../app');


describe('Test Suite for News', () => {
    it('it should fetch all news', (done) => {
        request(app)
            .get('/getAllNews')
            .expect(200)
            .end((err, res) => {
                res.body.articles[0].should.have.property('author');
            })
        done()
    })

    it('it should get Top-Headline News', (done) => {
        request(app)
            .get('/top-headlines')
            .query({ category: 'business' })
            .expect(200)
            .end((err, res) => {
                res.body.articles[0].should.have.property('source')
            })
        done()
    })

    it('it should get Sources News', (done) => {
        request(app)
            .get('/sources')
            .query({ category: 'business', country: 'us' })
            .expect(200)
            .end((err, res) => {
                res.body.sources[0].should.have.property('name')
                // console.log(res.body)
            })
        done()
    })

    it('it should get Everything News', (done) => {
        request(app)
            .get('/everything')
            .query({ q: "david" })
            .expect(200)
            .end((err, res) => {
                res.body.articles[0].should.have.property('urlToImage')
            })
        done()
    })
})