const mongoose = require('mongoose');

// Create the schema

// Takes in an object equal to the def of our schema
const CounterSchema = new mongoose.Schema({
    name: String,
    value: Number,
    maxValue: Number,
    minValue: Number,
    increment: Number,
});

const Counter = mongoose.model('Counter', CounterSchema);

module.exports = Counter;
