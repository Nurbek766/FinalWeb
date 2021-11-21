var express = require('express');
var router = express();

router.use(express.static('public'));

router.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html",200)
})

router.get('/index', function (req, res) {
  res.sendFile(__dirname + "/index.html",200)
})

router.get('/about', function (req, res) {
  res.sendFile(__dirname +"/about.html",200)
})

router.get('/about/team_photo', function (req, res) {
  res.sendFile(__dirname + "/public/img/team/photo.jpg",200)
})

router.get('/video', function (req, res) {
 res.redirect(301, 'https://www.youtube.com/watch?v=yXS8iNKqsCM')
})

router.get('*', function(req, res){
  res.sendFile(__dirname +"/error.html", 404);
});

router.listen(3000, 'localhost');

console.log('Server listened in localhost:3000')