const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('WELCOME!!!')
})

app.get('/zero', function (req, res) {
  res.send('0')
})

app.get('/add', function (req, res) {
  let answer = parseInt(req.query.a) + parseInt(req.query.b);
  res.send(answer.toString())
})

app.get('/subtract', function (req, res) {
  let answer = parseInt(req.query.a) - parseInt(req.query.b);
  res.send(answer.toString())
})

app.get('/double/:number', function (req, res) {
  let answer = parseInt(req.params.number) * 2
  res.send(answer.toString())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})