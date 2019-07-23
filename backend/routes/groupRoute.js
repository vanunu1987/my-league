const groupService = require('../services/groupService')
const BASE = '/groups'

const addRoutes = (app) => {
    app.get(`${BASE}`, (req, res) => {
        groupService.loadGroups()
            .then(groups => res.json(groups))
    })

}


module.exports = addRoutes;