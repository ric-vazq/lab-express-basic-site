const express = require('express');
const app = express();
const port = 3000; 
let dirName = '/Users/ricardovazquez/Desktop/Ironhack/labs/lab-express-basic-site'

app.get('/home', (req, res) => {
    res.sendFile(`${dirName}`+ '/views/home.html')
});

app.get('/about', (req, res) => {
    res.sendFile(`${dirName}`+ '/views/about.html')
});

app.get('/works', (req, res) => {
    res.sendFile(`${dirName}`+ '/views/works.html')
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`listening to ${port}`)
})