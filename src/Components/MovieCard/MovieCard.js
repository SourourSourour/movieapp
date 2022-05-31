import React from 'react'
import './MovieCard.css'
import ReactStars from "react-rating-stars-component"


const MovieCard
 = ({el}) => {
  return (
  
     
<div id="container">	
  <div className="product-details">
    <h1>{el.title}</h1>
    <ReactStars
    count={5}
   edit={false}
   value={el.rating}
    size={24}
    activeColor="#ffd700"
  />
    
    <p className="information">{el.description}</p>
    <div className="control">
      <button className="btn">
        
        
        <span className="btn1">Watch trailer</span>
      </button>
    </div>
  </div>
  <div className="product-image">
    <img src={el.posterURL} alt="photo" />
    
  </div>
  </div>

  )
}

export default MovieCard 
