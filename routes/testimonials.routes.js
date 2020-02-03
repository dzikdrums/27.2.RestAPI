const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonials.controller');

router.get('/testimonials', TestimonialController.getAll);

router.get('/testimonials/random', TestimonialController.getRandom);

router.get('/testimonials/:id', TestimonialController.getOne);

router.put('/testimonials/:id', TestimonialController.putOne);

router.post('/testimonials', TestimonialController.postOne);

router.delete('/testimonials/:id', TestimonialController.putOne);

module.exports = router;