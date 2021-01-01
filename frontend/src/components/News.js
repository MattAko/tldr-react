import React from 'react';
import NewsCard from './NewsCard';
import './news.css'

function News({news}){
    return(
        <div id="News">
            {news.map((data, i) => {
                return <NewsCard articleData={data}/>
            })}
        </div>
    )
}

export default News;