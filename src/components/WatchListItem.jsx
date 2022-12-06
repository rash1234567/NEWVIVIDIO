import React from 'react'

function WatchListItem({poster_path, showDetails, id}) {
    const API_IMG = "https://image.tmdb.org/t/p/w500";
  return (
    <div className='p-5 mx-auto' onClick={()=>showDetails(id)}>
        <div className='w-[200px] h-[280px]'>
            <img src={API_IMG+poster_path}className=' w-full h-full rounded-[30px]'/>
        </div>
    </div>
  )
}

export default WatchListItem;