
const books = require('../data/books');

const getBooks = async(req,res) => {
    try{
        res.json(books);
    } catch(error) {
        res.send("error sending data")
    }
}

module.exports = {getBooks}