const express = require('express');
const app = express();
const port = 8090;

app.get('/', home);

function home(req, res) {
    res.send('hello world!');
}

app.listen(port, function() {
    console.log('its truly alive');
})