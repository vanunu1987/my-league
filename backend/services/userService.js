const mongoService = require('./mongoService')
const axios = require('axios');

const USERS = [
    {
        name: 'Shawn',
        groups: [],
        score: 20
    }
]

const loadUsers = async () => {
    let db = await mongoService.connect()
    let response = await db.collection('users').find({}).sort({score:-1}).limit(5).toArray()
    return response
}



// ( async function _addUsers() {
    
//     let db = await  mongoService.connect()
//     let response = await db.collection('users').insertMany(USERS)
//     console.log('added : ',response);
// })()



// insertRandomUsers()

module.exports = {
    loadUsers,
}