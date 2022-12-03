import React from 'react'

function CarouselCard() {
  return (
    <div className='carousel w-[80%] h-[50vh] p-12 flex justify-around mt-10 mx-auto rounded-[30px]'>
        <div className='carouselItem flex justify-around w-full h-full'>
          <div className='w-[30%] h-full'>
              <img src="https://image.tmdb.org/t/p/w500/ulgKdif3ubMACDltr8VZy6fyVjW.jpg" className=' w-full h-full rounded-[30px]'/>
          </div>
          <div className='text-white ml-8 w-96 flex flex-col'>
              <h1 className='text-2xl'>Lorem ipsum dolor sit.</h1>
              <span className='text-sm font-thin'>2022-12-01 ||</span>
              <p className='text-sm font-thin mt-2 leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam quidem autem natus dolorum amet nobis, dolorem officiis odit voluptas assumenda recusandae quis sequi exercitationem? Earum ipsam numquam laboriosam eum?</p>
              <button className='bg-blue-800 p-2 w-1/2 self-center rounded-2xl'>Watch later</button>
          </div>
        </div>
    </div>
  )
}

export default CarouselCard