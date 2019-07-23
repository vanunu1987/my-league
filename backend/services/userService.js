const mongoService = require('./mongoService')
const axios = require('axios');

// const USERS = [
//     {
//         name: 'Muki',
//         groups: [],
//         score: 100
//     },
//     {
//         name: 'Puki',
//         groups: [],
//         score: 10
//     },
//     {
//         name: 'Shuki',
//         groups: [],
//         score: 93
//     },
//     {
//         name: 'Dima',
//         groups: [],
//         score: 111
//     },
//     {
//         name: 'Sima',
//         groups: [],
//         score: 62
//     }
// ]


function loadUsers() {
    return mongoService.connect()
        .then((db) => {
            return db.collection('users').find({}).toArray()
        })
}


// (function _addUsers() {
//     return mongoService.connect()
//         .then(db => {
//             return db.collection('users').insertMany(USERS)
//         })
// })()

module.exports = {
    loadUsers,
}