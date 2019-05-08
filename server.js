const express = require('express');
const mongoose = require('mongoose');
const beerRouter = require('./routes/beerRouter');
const app = express();

console.log('This runs on startup');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/beers', beerRouter);

app.use('/', (req, res) => {
    res.send('Welcome to the API of beer');
})

const port = process.env.PORT || 4444;

mongoose.connect('mongodb://localhost:27017/beers', { useNewUrlParser: true })
mongoose.connection.on('connected', () => {
    console.log('Connected to beers DB');
})
mongoose.connection.on('error', () => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
})