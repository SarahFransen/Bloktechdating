const express = require('express');
const app = express();
const port = 8090;

app.get('/home', home);
app.get('/about', about);
app.get('/contact', contact);

function home(req, res) {
    res.send('hello world!');
}

function about(req, res) {
    res.send('hello about!');
}

function contact(req, res) {
    res.send('Hello contact!');
}

app.listen(port, function() {
    console.log('want to check the commit stuff for insurance I guess');
})