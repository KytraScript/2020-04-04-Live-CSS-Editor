var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(4870, function () {
    console.log('New Dev Server Listening on localhost:4870!');
});
