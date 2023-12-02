import React from 'react'
import { useNavigate } from 'react-router-dom'
const Drop = (props) => {
  const navigate = useNavigate() 

  return (
      <div >
            <select style={{border:'1px solid black'}} onChange={(e) => navigate(`/movies/gen/${e.target.value}`)}>
                <option >filter Movie</option>
                  { props?.fetchDrop?.length > 0 &&
              props?.fetchDrop?.map((ft)=> <option key={ft.id} value={ft.id}>
                {ft.name}
              </option> )
              }             
            </select>
          </div>
    
  )
}

export default Drop
