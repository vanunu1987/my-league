const userService = require('../services/userService')
const BASE = '/users'


const addRoutes = (app) => {


    app.get(`${BASE}`,(req,res) => {
        userService.loadUsers()
        .then( users => {
            res.json(users)
        })
        
    })

    app.post(`${BASE}/signup`, (req, res) => {
        const credentials = req.body
        userService.addUser(credentials)
            .then(user =>{
                req.session.user = user
                res.json(user)
            })
    })

    app.put(`${BASE}/login`, (req, res) => {
        const credentials = req.body
        if (Object.keys(credentials).length === 0){
            req.session.user = null
            return res.json(null)
        }
        
        userService.checkLogin(credentials)
        .then(user => {
            req.session.user = user
            res.json(user)
        })
    })

}


module.exports = addRoutes;