import React from 'react';
import './trendingcard.css'

function Trending(){



    return(
        <div id='trending'>
            <div className='trendCard business'>
                Business
            </div>
            <div className='trendCard health'>
                Health
            </div>
            <div className='trendCard science'>
                Science
            </div>
            <div className='trendCard sports'>
                Sports
            </div>
            <div className='trendCard technology'>
                Technology
            </div>
        </div>
    )
}

export default Trending;