const userService = require('../services/userService')
const BASE = '/users'


const addRoutes = (app) => {


    app.get(`${BASE}`,(req,res) => {
        userService.loadUsers()
        .then( users => res.json(users))
        
    })

}


module.exports = addRoutes;