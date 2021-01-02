import './App.css';
import Search from './components/Search.js';
import React, {useState, useCallback} from 'react';
import SearchResults from './components/SearchResults';
import News from './components/News';
import Trending from './components/Trending'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([])

  // useCallback used to ensure consistency between parent and child component
  const wrapperSetSearchQuery = useCallback(val =>{
    setSearchQuery(val);
  }, [setSearchQuery]);

  // 
  const wrapperSetArticles = useCallback(val =>{
    setArticles(val);
  }, [setArticles]);

  return (
    <div className="App">
      <div className="container">
        <Trending/>
        <Search updateArticles={wrapperSetArticles} updateQuery={wrapperSetSearchQuery} query={searchQuery}/>
        <SearchResults query={searchQuery}/>
        <News news={articles}/>
      </div>
    </div>
  );
}

export default App;
