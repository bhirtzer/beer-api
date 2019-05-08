const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Nothing lower than 0'],
        max: [10, "Let's not get carried away"],
        required: true
    }
})

module.exports = mongoose.model('Beer', BeerSchema);