import React from 'react';
import './news.css'

function NewsCard({articleData}){
    function convertDate(){
        var rawDate = articleData.publishedAt;
        var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var year = rawDate.slice(0,4);
        var temp = parseInt(rawDate.slice(5,7));
        var month = Months[temp-1];
        var day;
        rawDate[8]==='0' ? day=rawDate[0] : day=rawDate.slice(8,10);
        return (day + ' ' + month + ' ' + year)
    }

    function openURL(){
        window.open(articleData.url, "_blank"); 
    }

    var publishDate = convertDate();
    // console.log('Article data for ' + articleData.title)
    // console.log(articleData);
    
    return(
        <div id="newsContainer">
            <img onClick={openURL} src={articleData.urlToImage}></img>
            <div className="title">
                <p onClick={openURL}>{articleData.title}</p>
                <div className="smallText">Author: {articleData.author}</div>
                <div className="smallText">Published: {publishDate}</div>
            </div>
            <button class="orangeButton centerVert dim">tl;dr</button>
            
            
        </div>
    )
}

export default NewsCard;