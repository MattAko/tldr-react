// Requirements
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;

/* 
    Create an application/json parser
    More info about bodyParser found here:
    https://expressjs.com/en/resources/middleware/body-parser.html
*/
const jsonParser = bodyParser.json()

app.listen(port, () => {
    console.log('Server is up and running...');
})

app.post('/search', (req, res) => {
    console.log('Post request received');
    res.send('Nice post bro');
})