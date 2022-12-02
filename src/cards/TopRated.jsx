import React from 'react'

const API_IMG = "https://image.tmdb.org/t/p/w500";
function TopRated({poster_path}) {
  return (
    <div>
        <img src={API_IMG+poster_path}  />
    </div>
  )
}

export default TopRated