const express = require('express');
const app = express();
const port = 3000; 

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}`+ '/views/home.html')
});

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}`+ '/views/about.html')
});

app.get('/works', (req, res) => {
    res.sendFile(`${__dirname}`+ '/views/works.html')
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`listening to ${port}`)
})