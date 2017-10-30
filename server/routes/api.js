// Expressの読み込み
const express = require('express');
const router = express.Router();
// Mongooseの読み込み
const mongoose = require('mongoose');
var res = mongoose.connect('mongodb://localhost/sss', {
  useMongoClient : true,
  user : 'username',
  pass : 'password'
});

// MongoDBに入っているコレクション(テーブル)
const Post = require('./../models/post');
let query;

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/posts', function(req, res) {
    res.send('posts works');
});

// http://azwoo.hatenablog.com/entry/2015/12/17/232625
// https://blog.mitsuruog.info/2012/11/nodejsexpressrest-apiurlrouting
// http://semind.github.io/blog/2012/03/05/mongooseshi-tutemita/
router.get('/posts/:type', function(req, res) {
    query = {type : req.params.type};

    Post.find(query, function(err, posts) {
        res.json(posts);
    });
});

router.get('/post/:id', function(req, res) {
    query = {id : req.params.id};

    Post.find(query, function(err, posts) {
        res.json(posts);
    })
});

module.exports = router;
