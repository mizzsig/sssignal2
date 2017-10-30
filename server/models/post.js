const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
//    _id: String,
    id: String,
    title: String,
    date: String,
    abstract: String,
    url: String,
    body: String,
    type: String,
    img: String
});

module.exports = mongoose.model('post', postSchema);
