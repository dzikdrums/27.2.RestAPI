const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../../../server.js');

chai.use(chaiHttp)
const request = chai.request;


describe('GET /api/concerts/performer/:performer', () => {

  it('/ should return all concerts of given performer', async() => {
    const res = await request(server).get('/api/concerts/performer/John Doe');
    const expectedConcertsAmount = 1;
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(expectedConcertsAmount);
  });
});

describe('GET /api/concerts/genre/:genre', () => {

  it('/ should return all concerts of given genre', async() => {
    const res = await request(server).get('/api/concerts/genre/R&B');
    const expectedConcertsAmount = 1;
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(expectedConcertsAmount);
  });
});

describe('GET /api/concerts/price/:price_min/:price_max', () => {

  it('/ should return all concerts in given price range', async() => {
    const res = await request(server).get('/api/concerts/price/20/30');
    const expectedConcertsAmount = 2;
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(expectedConcertsAmount);
  });
});

describe('GET /api/concerts/price/:day', () => {

  it('/ should return all concerts on given day', async() => {
    const res = await request(server).get('/api/concerts/day/1');
    const expectedConcertsAmount = 3;
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(expectedConcertsAmount);
  });
});

describe('GET /api/concerts', () => {

  it('/ should return amount of tickets left on given day', async() => {
    const res = await request(server).get('/api/concerts/');
    const expectedTicketsAmount = 46;
    expect(res.status).to.be.equal(200);
    expect(res.body[0].tickets).to.be.a('number');
    expect(res.body[0].tickets).to.be.equal(expectedTicketsAmount);
  });
});