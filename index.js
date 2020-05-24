const express = require('express');
const app = express();
const port = 8090;
const err = "";

app.get('/home', home);
app.get('/about', about);
app.get('/contact', contact);

app.use(function (req, res, next) {
    console.error(err.stack)
    res.status(404).send("Can't find the page you're looking for, sorry!")
})

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