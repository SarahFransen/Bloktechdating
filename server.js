const express = require('express');
const app = express();
const port = 8090;
const err = "";

app.set('view engine', 'ejs');
app.set('views', 'view');

/*routing*/
app.get('/home', home);
app.get('/about', about);
app.get('/planten', planten);

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

function planten(req, res) {
    res.send('Hello planten!');
    res.render('planten');
}

const data = [
    {
        name: 'raapzaad',
        color: 'geel',
        description: 'irritatie'
    },
    {
        name: 'data1',
        color: 'blep',
        description: 'moet iets habben'
    }
]

app.listen(port, function() {
    console.log('want to check the commit stuff for insurance I guess');
})