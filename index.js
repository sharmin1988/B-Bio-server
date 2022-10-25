const express = require('express')
const app = express()
const cors = require ('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to B-Bio server')
})




app.listen(port, () => {
    console.log(`B-bio server is running on port: ${port}`)
})