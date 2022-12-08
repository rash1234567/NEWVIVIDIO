import React from 'react'

const API_IMG = "https://image.tmdb.org/t/p/w500";
function Upcoming({title,overview,poster_path}) {
  return (
    <div className=" w-[100%] md:w-[60%] lg:w-full mx-auto bg-[#171029] rounded-lg shadow-md relative mt-3">
        <img className="rounded-lg h-[300px] w-full border-[#171029] " src={API_IMG+poster_path} alt="" />
        <div className=" bg-[#373737] text-white absolute bottom-0 rounded-b-lg ">
            <h5 className="mb-1 text-sm tracking-tight ">{title}</h5>
            <p className="text-[10px] ">{overview}</p>   
        </div>
    </div>
  )
}

export default Upcoming;