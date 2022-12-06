import React from 'react'

function CarouselCard({title, overview, poster_path, backdrop_path}) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className='carousel w-full lg:w-[90%] md:h-[30vh] lg:h-[50vh] h-[25vh] p-4 md:p-12 flex justify-around mt-2 rounded-[30px]' style={{backgroundImage: `url(${API_IMG+backdrop_path})`}}>
        <div className='carouselItem flex w-full h-full'>
          <div className='w-[30%] lg:w-[30%] md:w-[20%] h-full'>
              <img src={API_IMG+poster_path} className='w-full h-full rounded-xl md:rounded-[30px]'/>
          </div>
          <div className='text-white ml-4 md:ml-8 w-1/2 flex h-full flex-col'>
              <h1 className='md:text-2xl text-sm font-semibold w-full h-[20%]'>{title}</h1>
              <span className='text-[10px] md:text-sm font-thin h-[10%]'>2022-12-01 ||</span>
              <p className='text-[10px] md:text-sm font-thin md:mt-2 md:leading-5 h-[60%] overflow-y-scroll overview'>{overview}</p>
              <div className='flex justify-between'>
                <button className='bg-[#111010aa] p-1 text-[10px] md:text-lg md:p-2 w-[40%] md:w-[45%] self-center md:rounded-xl rounded-lg'>Trailer</button>
                <button className='bg-blue-800 p-1 text-[10px] md:text-lg md:p-2 w-[50%] md:w-[45%] self-center md:rounded-xl rounded-lg'>Watch later</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CarouselCard