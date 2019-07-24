const axios = require('axios');
const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

// const GROUPS = [
//     {
//         name:'Toto Monsters',
//         imgURL:'https://i2-prod.dailyrecord.co.uk/incoming/article11000226.ece/ALTERNATES/s615/13777114.jpg'
//     },
//     {
//         name:'Best Odds',
//         imgURL:'http://sohanews.sohacdn.com/2013/article-2306522-1933b72e000005dc-187-634x420-1365565930328.jpg'
//     },
//     {
//         name:'Friendly Games',
//         imgURL:'https://i.ytimg.com/vi/pvADtY2PUB0/maxresdefault.jpg'
//     },
//     {
//         name:'Football Lovers',
//         imgURL:'https://madnessmedia.net/wp-content/uploads/2018/06/Thumb-no-barss-1-758x426.jpg'
//     },
//     {
//         name:'Liverpool is in my blood',
//         imgURL:'https://www.abc.net.au/news/image/8553308-3x2-940x627.jpg'
//     },
//     {
//         name:'F.C Toto',
//         imgURL:'https://thespun.com/wp-content/uploads/2018/04/GettyImages-83034141-775x465.jpg'
//     },
// ]


const loadGroups = async () => {
    let db = await mongoService.connect()
    let respone = await  db.collection('groups').find({}).toArray()
    return respone
}

const getById = async (id) => {
    let _id = new ObjectId(id)
    let db = await mongoService.connect()
    let response = await db.collection('groups').findOne({_id})
    console.log('respone : ',response)
    return response
}

// (function _addGroups() {
//     return mongoService.connect()
//         .then(db => {
//             return db.collection('groups').insertMany(GROUPS)
//         })
// })()




module.exports = {
    loadGroups,
    getById

}