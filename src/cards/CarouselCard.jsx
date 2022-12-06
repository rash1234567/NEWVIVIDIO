import React from 'react'
import { useUserAuth } from '../utilities/UserAuthContextProvider';

function CarouselCard({title, overview, poster_path, backdrop_path,name,id}) {
  const {findYoutubeId} = useUserAuth();
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className='carousel w-[100%] h-[50vh] p-12 flex justify-around mx-auto mt-2 rounded-[30px]' style={{backgroundImage: `url(${API_IMG+backdrop_path})`}}>
        <div className='carouselItem flex justify-around w-full h-full'>
          <div className='w-[30%] h-full'>
              <img src={API_IMG+poster_path} className=' w-full h-full rounded-[30px]'/>
          </div>
          <div className='text-white ml-8 w-96 flex flex-col'>
              <h1 className='text-2xl font-semibold'>{title || name}</h1>
              <span className='text-sm font-thin'>2022-12-01 ||</span>
              <p className='text-sm font-thin mt-2 leading-5 h-4/5 overflow-y-scroll overview'>{overview}</p>
              <div className='flex justify-between'>
                <button className='bg-[#ccccccaa] p-2 w-[45%] self-center rounded-2xl' onClick={()=>findYoutubeId(id)} >Trailer</button>
                <button className='bg-blue-800 p-2 w-[45%] self-center rounded-2xl'>Watch later</button>
              </div>
          </div>
        </div>
    </div>
  )
}
export default CarouselCard