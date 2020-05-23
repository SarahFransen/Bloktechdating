const express = require('express');
const app = express();
const port = 8090;

app.get('/', home);
app.get('/about', about);
app.get('/life', life);
app.get('/plants', plants);

function home(req, res) {
    res.send('hello world!');
}

function about(req, res) {
    res.send('hello about!');
}

function life(req, res) {
    res.send('picture will appear one day!');
}

function plants(req, res) {
    res.send('pictures of zhe plants!');
}

app.listen(port, function() {
    console.log('want to check the commit stuff for insurance I guess');
})