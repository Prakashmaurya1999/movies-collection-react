import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import style from './Geners.module.css'
const Generic = () => {
  const [currentMovies, setCurrentMovies] = useState([])
  const params = useParams()
  console.log(params)

  const fetchGenresMovies = () => {
    const options = {
      method: 'GET', 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
           
      }};

  fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.id}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCurrentMovies(data.results)
    })
    .catch(err => console.error(err));
    }

  useEffect(()=>{
    fetchGenresMovies()
  },[params.id])  

  return (
    <div>
      {currentMovies.length > 0 && <div className={style.cardContainer}>
        {currentMovies.map((mov) => <Card movie={mov}/>)}
      </div>}
      
    </div>
  )
}
export default Generic
