const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const router = require('./router/todoRouter')
const dbConnection = require('./db/db.js')
const port = 3001
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
dbConnection()

app.use(router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})