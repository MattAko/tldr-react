import './App.css';
import Search from './components/Search.js';
import React, {useState, useCallback} from 'react';
import SearchResults from './components/SearchResults';

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
        <div id="trending">
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </div>
        <Search updateArticles={wrapperSetArticles} updateQuery={wrapperSetSearchQuery} query={searchQuery}/>
        <SearchResults query={searchQuery}/>
        {articles}
      </div>
    </div>
  );
}

export default App;
