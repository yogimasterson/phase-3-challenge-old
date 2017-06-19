const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/zero', function (req, res) {
  res.send('0')
})

app.get('/add', function (req, res) {
  res.send('Hello Zero World!')
})

app.get('/subtract', function (req, res) {
  res.send('Hello Zero World!')
})

app.get('/double', function (req, res) {
  res.send('Hello Zero World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})