const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// import routes
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');
const testimonialsRoutes = require('./routes/testimonials.routes');

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);
app.use('/api', testimonialsRoutes);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});