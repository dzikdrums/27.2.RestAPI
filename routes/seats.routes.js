const express = require('express');
const router = express.Router();

const SeatController = require('../controllers/seats.controller');

router.get('/seats', SeatController.getAll);

router.get('/seats/random', SeatController.getRandom);

router.get('/seats/:id', SeatController.getOne);

router.put('/seats/:id', SeatController.putOne);

router.post('/seats', SeatController.postOne);

router.delete('/seats/:id', SeatController.putOne);

module.exports = router;