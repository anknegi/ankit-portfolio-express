const mongoose = require('mongoose');

const CONFIG = require('../config/config')

function connectToDB() {
    mongoose.connect(CONFIG.MONGODB_URL)

    mongoose.connection.on('connect', () => console.log('Mongoose database connected'))

    mongoose.connection.on('error', (err) => console.log('Mongoose error', err))
}

module.exports = connectToDB