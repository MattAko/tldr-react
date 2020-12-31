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

    var articles = []
    axios.get(url)
    .then((response => {
        //console.log(response.data.articles);
        res.send(response.data.articles);
        articles 
        //articles = response.data.articles;
    }))
    .catch((error) => {
        console.log('There was an error');
        console.log(error);
    })
})


/*
    @desc: Post query to news API
    @return: array of objects containing relavent news articles
    https://newsapi.org/docs/endpoints/everything
*/
function findNewsArticles(query){
    var url = 'http://newsapi.org/v2/everything?' +
          `q=${query}&` +
          'sortBy=relevancy&' +
          `apiKey=${keys.news_api_key}`;

    var articles = []
    axios.get(url)
    .then((response => {
        //console.log(response.data.articles);
        articles = response.data.articles;
    }))
    .catch((error) => {
        console.log('There was an error');
        console.log(error);
    })

    console.log('what is going on' + articles);
    return articles;

}