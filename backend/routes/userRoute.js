const userService = require('../services/userService')
const BASE = '/users'


const addRoutes = (app) => {


    app.get(`${BASE}`, (req, res) => {
        userService.loadUsers()
            .then(users => {
                res.json(users)
            })

    })
    app.get(`${BASE}/user`, (req, res) => {
        let { user } = req.session
        res.json(user)

    })

    app.post(`${BASE}/signup`, (req, res) => {
        const credentials = req.body
        userService.addUser(credentials)
            .then(user => {
                req.session.user = user
                res.json(user)
            })
    })

    app.put(`${BASE}/login`, (req, res) => {
        const credentials = req.body
        if (Object.keys(credentials).length === 0) {
            req.session.user = null
            return res.json(null)
        }

        userService.checkLogin(credentials)
            .then(user => {
                req.session.user = user
                res.json(user)
            })
    })
    app.put(`${BASE}/logout`, (req, res) => {
        const user = req.body
        if (!req.session.user || !user) return res.json(null)
        if (user._id !== req.session.user._id) return res.json(user)
        req.session.user = null
        res.json(req.session.user)
    })

}


module.exports = addRoutes;