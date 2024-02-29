const express = require('express');
const router = express.Router()
const {getBooks} = require('../controller/books.js')

router.get('/all',getBooks)

module.exports = router;