const eventService = require('../services/eventService')
const BASE = '/events'



const addRoutes = (app) => {
    // app.get(`${BASE}`, (req, res) => {
    //     groupService.loadGroups()
    //         .then(groups =>  res.json(groups))
    // })

    app.get(`${BASE}`, (req, res) => {
        eventService._getEvents()
            .then(teams =>  res.json(teams))
    })

}


module.exports = addRoutes