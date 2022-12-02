import React from 'react'

function CarouselCard() {
  return (
    <div className='carousel w-[60vw] h-[400px] p-12 flex justify-around mt-10 mx-auto rounded-[30px]'>
        <div className='w-[30%] h-[280px]'>
            <img src="https://image.tmdb.org/t/p/w500/ulgKdif3ubMACDltr8VZy6fyVjW.jpg" className=' w-full h-full rounded-[30px]'/>
        </div>
        <div className='text-white ml-8 mt-4 w-96'>
            <h1 className='text-2xl'>Lorem ipsum dolor sit.</h1>
            <span className='text-sm font-thin'>2022-12-01 ||</span>
            <p className='text-sm font-thin mt-2 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam quidem autem natus dolorum amet nobis, dolorem officiis odit voluptas assumenda recusandae quis sequi exercitationem? Earum ipsam numquam laboriosam eum?</p>
        </div>
    </div>
  )
}

export default CarouselCard