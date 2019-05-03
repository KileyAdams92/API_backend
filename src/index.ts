import express from 'express'
import bodyParser from 'body-parser'
import {getTodos, getTodoById, createTodo, updateTodo, deleteTodo} from './queries'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.get('/', (request, response) => {
response.json({info: 'Test'})
})

app.get('/todos', getTodos)
app.get('/todos/:id', getTodoById)
app.post('/todos', createTodo)
app.put('/todos/:id', updateTodo)
app.delete('/todos/:id', deleteTodo)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})