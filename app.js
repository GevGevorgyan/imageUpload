const body_parser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const dbConn = mongoose.createConnection('localhost:27017/files');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

const routes = require('./services/');
app.use('/', routes);



app.db = {
    files: dbConn.model('files')
};

app.listen(3003, function () {
    console.log('Running on port 3003');
});
