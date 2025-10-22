const express = require('express')
const dataStore = require('./dataStore')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

// Fetch the data
server.get('/data', (req, res)=>{
    let data = dataStore.fetch()
    res.send(data)
})

// Posting the data
server.post('/data', (req,res)=>{
    let newTask = req.body
    dataStore.append(newTask)
    res.send("Successfully added task")
})

const PORT = 5003

server.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})