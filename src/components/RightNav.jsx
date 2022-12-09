import  axios  from 'axios';
import React from 'react'
import Upcoming from '../cards/Upcoming';
import { useUserAuth } from '../utilities/UserAuthContextProvider';


function RightNav() {
    const {upcoming,setUpcoming} = useUserAuth()
  return(
    <>
    <div className='bg-[#373737] home w-full lg:w-[20vw] h-[100vh] flex flex-col p-2 overflow-y-scroll '>
        <i className="fa-regular fa-bell text-white self-end mr-2 text-lg hidden lg:block"></i>
        <h5 className='text-white mt-0 lg:mt-3 self-center lg:self-start'>Upcoming Movies</h5>
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