//import axios from 'axios';  // For API calls/HTTP requests

// Requirements

const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


// API keys
var keys = require('./secrets.json');
const { response } = require('express');

var port = 5000;

/* 
    Create an application/json parser
    More info about bodyParser found here:
    https://expressjs.com/en/resources/middleware/body-parser.html
*/
const jsonParser = bodyParser.json()


app.listen(port, () => {
    console.log('Server is up and running...');
})

/*
    https://newsapi.org/docs
*/
app.post('/search', jsonParser, (req, res) => {
    const searchQuery = req.body.query;
    console.log('User searching for ' + searchQuery);

    // var articlesArray = findNewsArticles(searchQuery);
    // console.log('Articles array: ' + articlesArray);
    // res.send(articlesArray);
    

    var url = 'http://newsapi.org/v2/everything?' +
          `q=${searchQuery}&` +
          'sortBy=relevancy&' +
          `apiKey=${keys.news_api_key}`;

    axios.get(url)
    .then((response => {
        res.send(response.data.articles.slice(0, 5));
    }))
    .catch((error) => {
        console.log('There was an error');
        console.log(error);
    })
})

app.post('/summarize', jsonParser, (req, res) => {
    console.log('User is summarizing an article');

    var url = 'http://api.meaningcloud.com/summarization-1.0?' +
            `key=${keys.summarization_key}&` +
            `url=${req.body.url}&` +
            `sentences=5`;
    axios.post(url)
    .then((response) => {
        res.send(response.data.summary);
    })
})

function summarize(articles){
    var return_data = [];   //array that will be returned to user
    var i;
    for(i = 0; i<4; i++){
        console.log(i);
        setTimeout(() => {
            var url = 'http://api.meaningcloud.com/summarization-1.0?' +
            `key=${keys.summarization_key}&` +
            `url=${articles[i].url}&` +
            `sentences=5`;

            axios.post(url)
            .then((response) => {
                console.log(response.data.summary);
            })
        }, 1000);
    }
}

/*
    @desc: Find trending topics in the US using News API
    @return: Array of objects, each object containing trending topics
*/
app.post('/trending', jsonParser, (req, res) => {
    var url = 'http://newsapi.org/v2/top-headlines?' +
        `country=US&` +
        `apiKey=${keys.news_api_key}`;

    axios.post(url)
    .then((response) => {
        res.send(response.data)
    })
})
