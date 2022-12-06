import React from 'react';
import { useNavigate } from "react-router-dom";
import humanIcon from '../images/humanIcon.png';
import backgroundImage from '../images/backgroundimage.jpg'

function Profile() {
  const navigate = useNavigate();
  return (
    <div className= " w-full lg:w-[60%] h-screen flex items-center" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className='flex mx-auto bg-white md:h-[90%] w-full h-full  md:w-4/5 lg:w-1/2 flex-col '>
       <div className='p-4 flex flex-col h-[33%]  md:h-[40%] lg:h-1/2 justify-between w-full bg-[#171029] text-white'>
          <div className=' flex w-[55%] items-center justify-between'>
          <i className="fa fa-chevron-left text-xl"  onClick={() => navigate(-1)}></i>
          <h1 className='text-xl font-semibold'>Profile</h1>
          </div>
          <div className='flex flex-col items-center w-full'>
             <img src={humanIcon} className='w-24'/>
             <h1 className='text-2xl font-semibold'>Imam Rasheedat</h1> 
          </div>
       </div>
       <div className='w-full flex flex-col mt-4 items-center font-bold'>
          <h1 className='text-2xl font-bold'>Email address</h1> 
          <input type="text" name='email' value='imamrasheedatahmad1993@gmail.com' readOnly className='bg-[#c3e1fa] w-4/5 p-2 rounded-[10px]' />
       </div>

      </div>
    </div>
  )
}

export default Profile