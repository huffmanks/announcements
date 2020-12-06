const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
})

module.exports = Event = mongoose.model('event', EventSchema)
