import React from 'react';
import Spinner from './Spinner';

import '../index.css';

export default function NewsCards(props) {


    const altImg = 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg';
    const newsData = props.article;


    return (
        <div className="card">
            {props.loading ? (
                <Spinner /> 
            ) : (
                <img className='img-fluid' src={!newsData.urlToImage ? altImg : newsData.urlToImage} alt="Image" />
            )}

            <div className="card-body">
                
                <h6><span className="badge bg-secondary">Author : {!newsData.author ? 'Unknown' : newsData.author.slice(0, 50)}</span></h6>
                <h5 className="card-title ">{newsData.title.slice(0, 44)}... </h5>
                <div className="card-text mb-2">{!newsData.description ? 'description not found' : newsData.description.slice(0, 130)}...</div>
                <a rel='no-referrer' type="button" target="_blank" href={newsData.url} className='btn btn-sm btn-success btn-outline-primary border-0 text-light w-50 m-auto' >read more</a>
           
            </div>

            <div className="card-footer text-center"><span className='fw-bold'>Published At :</span> {newsData.publishedAt}</div>
       
        </div>
    )
}
