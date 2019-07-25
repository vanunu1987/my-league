const axios = require('axios')
const mongoService = require('./mongoService')

const _addEvents = async (events) => {
    let db = await mongoService.connect()
    let response = await db.collection('events').insertMany(events)
    console.log(response)
}
const _clearEvents = async () => {
    let db = await mongoService.connect()
    let response = await db.collection('events').deleteMany({})
    console.log(response)
}



var resetData = async () => {
    await _clearEvents()
    const day1 = new Date(new Date().getTime() + 24 * 4 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const day2 = new Date(new Date().getTime() + 24 * 5 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const day3 = new Date(new Date().getTime() + 24 * 6 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const allDays = [day1, day2, day3]
    let eventsFromApi = await  Promise.all([...allDays.map(async day =>{
        let event = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${day}&s=Soccer`)
        return event.data.events
    } )])
    await _addEvents(...eventsFromApi)
}
console.log('khghjghjg');

// resetData()
