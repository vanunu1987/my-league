const groupService = require('../services/groupService')
const eventService = require('../services/eventService')
const BASE = '/groups'



const addRoutes = (app) => {
    app.get(`${BASE}`, (req, res) => {
        groupService.loadGroups()
            .then(groups =>  res.json(groups))
    })

    app.get(`${BASE}/:groupId`, (req, res) => {
        let {groupId} = req.params
        console.log('groupId : ',groupId);
        groupService.getById(groupId)
            .then(group =>  res.json(group))
    })

}


module.exports = addRoutes;