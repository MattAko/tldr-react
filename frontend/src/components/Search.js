import './search.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

/*
    @desc: Both the visual and backend components of the search button
*/
function Search(props){
    const ph = "What's up fucko'?"
    const [searchQuery, setSearchQuery] = useState('');
    const [articles, setArticles] = useState([]);

    // Update search query in parent component (App.js)
    const updateQueryCall = props.updateQuery;
    useEffect (() => {
        updateQueryCall(searchQuery);
    }, [updateQueryCall, searchQuery]);

    useEffect(() => {
        props.updateArticles(articles);
    })

    /* 
        Post search query to backend (localhost:5000)
        To modify route, view package.json and change 'proxy'
    */
    function postSearchQuery(e){
        e.preventDefault();

        const data = {
            query: document.getElementById('searchQuery').value
        }
        setSearchQuery(data.query);

        axios.post('/search', data)
        .then((response) => {
            console.log('Posting to backend server...');
            console.log(response.data);
            setArticles(response.data.articles);    //Update articles
        })
        .catch((error) => {
            console.log(error);
            console.log('An error occured while posting search query...');
        })
    }

    // JSX
    return(
        <form onSubmit={postSearchQuery}>
            <input type="text" id="searchQuery" placeholder={ph}></input>
        </form>
    )
}

export default Search;