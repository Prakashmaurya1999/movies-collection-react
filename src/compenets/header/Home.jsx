import React, {useEffect,useState} from 'react'


const Home = () => {
  const[nowplaying,setnowplaying] = useState([]);

  // fetch API here start
  const fetchnowplaying  = () =>{
    const options = {
      method: 'GET', 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
           
      }};

  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setnowplaying(data.results)
    })
    .catch(err => console.error(err));
    }

  useEffect(()=>{
    fetchnowplaying()
  },[]) 
  //Fetch API here End

  
  return (  


    <div>
      {/* Carousel Sec */}
      {nowplaying.length > 0 && <div style={{position:"relative", height:"80vh"}}>
          <img src={`https://image.tmdb.org/t/p/original${nowplaying[0].backdrop_path}`} 
                style={{
                  width:"100%", 
                  height:"100%", 
                  objectFit:"cover"}}/>
      </div>}
    </div>
  )
}
export default Home


