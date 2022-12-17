const express = require('express')
const app = express()
const port = 3000

// mongodb+srv://sandbox.aquuu.mongodb.net/test
// mongodb+srv://<user>:<GORO>@sandbox.aquuu.mongodb.net/test

const MongoClient = require('mongodb').MongoClient
let db;
MongoClient.connect('mongodb+srv://user:GORO@sandbox.aquuu.mongodb.net/', (err, client) => {
    if (err) throw err

    db = client.db('test')


})

app.get('/', (req, res) => {
    // db.collection('userData').find().toArray((err, result) => {
    //     if (err) throw err

    //     res.send(result)
    //     console.log(result)
    //     })
    db.collection('userData').insertOne({ name: 'test', age: 20 }, (err, result) => {
        if (err) throw err
        res.send(result)
        console.log(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
