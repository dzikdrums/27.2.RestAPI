const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  author: {type: String, required: true},
  text: {type: String, required: true},
  price: {type: Number, required: true},
  day: {type: Number, required: true},
  image: {type: String, required: true},
},
{
  versionKey: false
}
);

module.exports = mongoose.model('Testimonial', testimonialSchema);