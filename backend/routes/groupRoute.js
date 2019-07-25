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

    app.post(`${BASE}/user/add`,(req,res) => {
        let group = req.body
        let { user } = req.session
        groupService.addUser(group,user)
        .then(updatedGroup => {
            res.json(updatedGroup)
        })
    })

}


module.exports = addRoutes;