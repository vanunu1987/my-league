const axios = require('axios');
const mongoService = require('./mongoService')

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



function loadGroups() {
    return mongoService.connect()
        .then((db) => {
            console.log('in service');
            return db.collection('groups').find({}).toArray()
        })
}

// (function _addGroups() {
//     return mongoService.connect()
//         .then(db => {
//             return db.collection('groups').insertMany(GROUPS)
//         })
// })()


module.exports = {
    loadGroups,

}