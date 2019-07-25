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
    let response = await db.collection('users').find({}).sort({ score: -1 }).limit(5).toArray()
    return response
}

const addUser = async (credentials) => {
    let user = { ...credentials, groups: [], score: 0 }
    let db = await mongoService.connect()
    let response = await db.collection('users').insertOne(user)
    user._id = response.insertedId
    return user
}

const checkLogin = async (credentials) => {
    let db = await mongoService.connect()
    let response = await db.collection('users').findOne(credentials)
    console.log('login response : ',response);
    return response
}


module.exports = {
    loadUsers,
    addUser,
    checkLogin
}