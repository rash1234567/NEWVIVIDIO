import  axios  from 'axios';
import React,{useEffect} from 'react'
import { useState } from 'react'
import Upcoming from '../cards/Upcoming';


function RightNav() {
    const [upcoming,setUpcoming] = useState([])

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&primary_release_date.gte=2022-12-01&primary_release_date.lte=2023-12-01').then(res=> setUpcoming(res.data.results ))
    }, [])
    
  return(
    <>
    <div className='bg-[#171029] home w-full lg:w-[20vw] h-[100vh] flex flex-col p-2 overflow-y-scroll '>
        <i className="fa-regular fa-bell text-white self-end mr-2 text-lg"></i>
        <h5 className='text-white mt-3'>Upcoming Movies</h5>
        {
            upcoming.map(movie=>{
                return <Upcoming {...movie} key={movie.id}/>
            })
        }
    </div>
    </>
  )
}

export default RightNav