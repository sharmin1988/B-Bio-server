const express = require('express')
const app = express()
const cors = require ('cors')
const port = process.env.PORT || 5000
const courses = require('./data/courses.json')

app.use(cors())



app.get('/', (req, res) => {
    res.send('Welcome to B-Bio server')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id',(req, res) => {
    const id = req.params.id
    const course = courses.find(cr => cr.id == id)
    res.send(course)
})

app.get('/courses/checkout/:id',(req, res) => {
    const id = req.params.id
    const course = courses.find(cr => cr.id == id)
    res.send(course)
})


app.listen(port, () => {
    console.log(`B-bio server is running on port: ${port}`)
})