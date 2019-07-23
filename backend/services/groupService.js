const axios = require('axios');
const mongoService = require('./mongoService')


function loadGroups() {
    return mongoService.connect()
        .then((db) => {
            return db.collection('groups').find({}).toArray()
        })
}


module.exports = {
    loadGroups,

}