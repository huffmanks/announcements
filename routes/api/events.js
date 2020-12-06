const express = require('express')
const router = express.Router()

// Event Model
const Event = require('../../models/Event')

router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})

router.post('/', async (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        image: req.body.image,
        location: req.body.location,
        cost: req.body.cost,
        details: req.body.details,
        link: req.body.link,
        contact: req.body.contact,
    })

    try {
        const event = await newEvent.save()
        res.json(event)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})

module.exports = router
