const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const Port = 5001;

app.use(express.json());

app.listen(Port, () => {
    console.log("server listening on port:"+Port)
})

app.get('/', (req,res) =>{
    res.send(books)
})

const booksRouter = require('./routes/books')
app.use('/books',booksRouter)
