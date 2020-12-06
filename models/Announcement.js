const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
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

module.exports = Announcement = mongoose.model(
    'announcement',
    AnnouncementSchema
)
