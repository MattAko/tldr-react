import React, {useState} from 'react';

function News({news}){
    return(
        <div id="News">
            {news.map((data, i) => {
                return <h1>{data.url}</h1>
            })}
        </div>
    )
}

export default News;