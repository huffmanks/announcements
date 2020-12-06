const express = require('express')
const router = express.Router()

// Announcement Model
const Announcement = require('../../models/Announcement')

router.get('/', async (req, res) => {
    try {
        const announcements = await Announcement.find()
        res.json(announcements)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})

router.post('/', async (req, res) => {
    const newAnnouncement = new Announcement({
        title: req.body.title,
        image: req.body.image,
        details: req.body.details,
        link: req.body.link,
        contact: req.body.contact,
    })

    try {
        const announcement = await newAnnouncement.save()
        res.json(announcement)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})

module.exports = router
