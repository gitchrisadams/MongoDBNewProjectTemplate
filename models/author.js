const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// mariochar is collection based off MarioCharSchema above:
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
