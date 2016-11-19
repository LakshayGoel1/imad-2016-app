var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'lakshaygoel1',
    database: 'lakshaygoel1',
    host: 'localhost',
    port: '5432',
    password: 'db-lakshaygoel1-4627'
};

var pool = new Pool(config);
app.get('/test.db', function (req, res) {
 
    pool.query('SELECT * FROM test', function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result.rows));
       }
    });
});

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

app.get('/ui/About2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'About2.html'));
});

app.get('/ui/Article.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article.html'));
});

app.get('/ui/Lakshay1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Lakshay1.jpg'));
});

app.get('/ui/instagram.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'instagram.jpg'));
});

app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

app.get('/ui/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
