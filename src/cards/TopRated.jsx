import React from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500";
function TopRated({poster_path}) {
  return (
    <div className='p-1'>
        <div className='w-[200px] h-[280px]'>
            <img src={API_IMG+poster_path} className=' w-full h-full rounded-[30px]'/>
        </div>
    </div>
  )
}
export default TopRated