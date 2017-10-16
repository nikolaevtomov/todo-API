const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

let todos = [
  {'id': 0, 'date': '2015-01-16T13:40:00.000Z', 'description': 'React JS', 'completed': true},
  {'id': 1, 'date': '2016-02-12T14:40:00.000Z', 'description': 'React Native', 'completed': true},
  {'id': 2, 'date': '2017-03-19T14:40:00.000Z', 'description': 'React DOM', 'completed': false},
  {'id': 3, 'date': '2018-04-20T14:40:00.000Z', 'description': 'Node JS', 'completed': false}
]

app.use(serveStatic(process.cwd()))
app.use(morgan('combined'))
app.use(cors())

app.get('/api/todo', function (req, res) {
  res.end(JSON.stringify(todos))
})

app.get('/api/todo/:id', function (req, res) {
  res.end(JSON.stringify(todos[req.params.id]))
})

app.post('/api/todo', bodyParser.json(), function (req, res) {
  const todo = req.body
  todo.id = todos.length
  todos.push(todo)
  res.end(JSON.stringify(todo))
})

app.put('/api/todo/:id', bodyParser.json(), function (req, res) {
  const todo = req.body
  if (!(req.params.id in todos)) {
    res.end('Todo ' + req.params.id + ' not found')
  }
  todo.id = Number(req.params.id)
  todos[req.params.id] = req.body
  res.end(JSON.stringify(todo))
})

app.listen(8001, function () {
  console.log('Listening on port 8001 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)')
})
