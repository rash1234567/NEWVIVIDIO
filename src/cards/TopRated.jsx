import React from 'react';


const API_IMG = "https://image.tmdb.org/t/p/w500";
function TopRated({poster_path,showDetails,id}) {

  return (
    <div className='p-1' onClick={()=>showDetails(id)}>
        <div className='w-[200px] h-[280px]'>
            <img src={API_IMG+poster_path} className=' w-full h-full rounded-[30px]'/>
        </div>
       
    </div>
  )
}
export default TopRated