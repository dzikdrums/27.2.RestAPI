const Concert = require('../models/concert.model');
const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
  try {
    const seats = await Seat.find();
    const gigs = await Concert.find();
    console.log(gigs)
    for (let gig of gigs) {
      let seatsTaken = 0;
      for (let seat of seats) {
        if (gig.day === seat.day) {
          seatsTaken += 1;
        }
      }
      gig.tickets = 50-seatsTaken
      await (gig.save());
    }
    res.json(await Concert.find());
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

exports.getRandom = async (req, res) => {
  try {
    const count = await Concert.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Concert.findOne().skip(rand);
    if(!dep) res.status(404).json({message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.json(err);
  }
}

exports.getOne = async (req, res) => {
  try {
    const dep = await Concert.findById(req.params.id);
    if(!dep) res.status(404).json({message: 'Not found'})
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

exports.postOne = async (req, res) => {
  try {
    const { name } = req.body;
    const newConcert = new Concert({name: name});
    await newConcert.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json(err);
  }
}

exports.putOne = async (req, res) => {
  try {
    const { name } = req.body;
    const dep = await(Concert.findById(req.params.id));
    if (dep) {
      dep.name = name;
      await (dep.save());
      res.json(await Concert.find());
    } else res.status(404).json({ message: 'Not found'});
  }
  catch(err) {
    res.status(500).json(err);
  };
}

exports.deleteOne = async (req, res) => {
  try {
    const dep = await(Concert.findById(req.params.id));
    if(dep) {
      await Concert.deleteOne({ _id: req.params.id });
      res.json(await Concert.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
}