const mongoService = require('./mongoService')
const axios = require('axios');


function loadUsers() {
    return mongoService.connect()
        .then((db) => {
            return db.collection('users').find({}).toArray()
        })
}

module.exports = {
    loadUsers,
}