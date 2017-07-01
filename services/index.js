const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');

const Image = require('./upload');

// router.getImages = function() {
//
// }
//
// router.addImage = function(image, callback) {
//  Image.create(image, callback);
// }
 
 
const storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'services/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});
 
const upload = multer({storage: storage});

// router.get('/images/:name', function (req, res) {
//     Image.find({},{name:req.body.id})
// });

router.post('/add', upload.any(), function(req, res) {
  res.send(req.files);
 
 const path = req.files[0].path;
 const imageName = req.files[0].originalname;
 
 const imagepath = {};
 imagepath.path = path;
 imagepath.originalName = imageName;

 let uploadImg = new Image();
 uploadImg.path = path;
 uploadImg.originalName = imageName;
 uploadImg.save(function (err, uploadImg) {
     if (err) return console.error(err);
     uploadImg.speak();
 });
});
 
module.exports = router;
