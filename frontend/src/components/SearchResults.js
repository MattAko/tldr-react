function SearchResults(props){

    return(
        <div id='searchResults'>
            Finding articles for <div className="inline focus">{props.query}</div>
            
        </div>
    )
}

export default SearchResults;