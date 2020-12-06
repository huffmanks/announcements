if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// Routes
const announcementRoutes = require('./routes/api/announcements')
const eventRoutes = require('./routes/api/events')

// Middleware
app.use(cors())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// Use Routes
app.use('/api/announcements', announcementRoutes)
app.use('/api/events', eventRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

// TODO
// Format Date
// Create Date input
