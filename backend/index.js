const express = require('express')
const sortIcon = require('./data/sort-icon.json')
const app = express()

app.get('/index', (req, res) => {
  res.send(sortIcon)
})

app.listen(8080, () => {
  console.log('sever is running 8080')
})