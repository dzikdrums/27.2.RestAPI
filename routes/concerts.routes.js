const express = require('express');
const router = express.Router();

const ConcertController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertController.getAll);

router.get('/concerts/random', ConcertController.getRandom);

router.get('/concerts/:id', ConcertController.getOne);

router.put('/concerts/:id', ConcertController.putOne);

router.post('/concerts', ConcertController.postOne);

router.delete('/concerts/:id', ConcertController.putOne);

module.exports = router;