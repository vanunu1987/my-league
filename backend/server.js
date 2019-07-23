const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
var history=require('connect-history-api-fallback')
const addGroupRoutes = require('./routes/groupRoute')
const addUserRoutes = require('./routes/userRoute')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true // enable set cookie
}));

app.use(bodyParser.json({limit: '50mb'}))
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(history())

app.use(express.static('public'));
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


addGroupRoutes(app)
addUserRoutes(app)


