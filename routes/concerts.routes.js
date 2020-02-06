const express = require('express');
const router = express.Router();

const ConcertController = require('../controllers/concerts.controller');
const NewConcertController = require('../controllers/NewConcerts.controller');

router.get('/concerts/performer/:performer', NewConcertController.getPerformer)
router.get('/concerts/genre/:genre', NewConcertController.getGenre)
router.get('/concerts/price/:price_min/:price_max', NewConcertController.getPrice)
router.get('/concerts/day/:day', NewConcertController.getDay)

router.get('/concerts', ConcertController.getAll);

router.get('/concerts/random', ConcertController.getRandom);

router.get('/concerts/:id', ConcertController.getOne);

router.put('/concerts/:id', ConcertController.putOne);

router.post('/concerts', ConcertController.postOne);

router.delete('/concerts/:id', ConcertController.putOne);

module.exports = router;