const Concert = require('../models/concert.model');

exports.getPerformer = async (req, res) => {
  try {
    const performersGigs = []
    const gigs = await Concert.find();
    for(let gig of gigs) {
      if(gig.performer === req.params.performer) {
        performersGigs.push(gig)
      }
    }
    res.send(performersGigs);
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

exports.getGenre = async (req, res) => {
  try {
    const genresGigs = []
    const gigs = await Concert.find();
    for(let gig of gigs) {
      if(gig.genre === req.params.genre) {
        genresGigs.push(gig)
      }
    }
    res.send(genresGigs);
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

exports.getPrice = async (req, res) => {
  try {
    const pricesGigs = []
    const gigs = await Concert.find();
    const price_max = parseInt(req.params.price_max);
    const price_min = parseInt(req.params.price_min);
    for(let gig of gigs) {
      if(gig.price < price_max && gig.price > price_min) {
        pricesGigs.push(gig)
      }
    }

    res.send(pricesGigs);
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

exports.getDay = async (req, res) => {
  try {
    const daysGigs = []
    const gigs = await Concert.find();
    for(let gig of gigs) {
      if(gig.day === parseInt(req.params.day)) {
        daysGigs.push(gig)
      }
    }
    res.send(daysGigs);
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

