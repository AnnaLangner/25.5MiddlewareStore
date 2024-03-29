var express = require('express');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use('/store',function(req, res, next){
    console.log('I am an intermediary when requesting /store.');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('This is shop');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!')
});