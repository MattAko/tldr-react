import React from 'react';
import './news.css'

function NewsCard({articleData}){
    function convertDate(){
        
    }

    function openURL(){
        window.open(articleData.url, "_blank"); 
    }

    console.log('Article data for ' + articleData.title)
    console.log(articleData);
    
    return(
        <div id="newsContainer">
            <img onClick={openURL} src={articleData.urlToImage}></img>
            <div className="title">
                <p>{articleData.title}</p>
                <div class="smallText">Author: {articleData.author}</div>
            </div>
            <button class="orangeButton centerVert rightHori">tl;dr</button>
            
            
        </div>
    )
}

export default NewsCard;