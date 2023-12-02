import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
  console.log(props.movie)
  return (
 
      <div className={style.card}>
        <img src={`https://image.tmdb.org/t/p/original${props?.movie?.poster_path}`} 
              alt={props?.movie?.original_title}
        />
        <h3>{props?.movie?.original_title}</h3>
    </div>
  )
}

export default Card
