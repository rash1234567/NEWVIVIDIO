import React from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../utilities/UserAuthContextProvider'

function SideNav() {
  const {handleSubmit, input, handleChange} = useUserAuth();

  return (
    <div className='bg-[#171029] lg:w-[20vw] h-[100vh] lg:flex flex-col px-8 py-2 hidden'>
        <div className="logo mx-auto" style={{fontSize:'20px' }}>
          <i className="fa-solid fa-v" style={{ color:'white' }}></i>
          <i className="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
          <i className="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
          <i className="fa-solid fa-video" style={{ color:'white' }}></i>
        </div>
        <div className='mt-4 ml-4 h-[80%]'>
          <h1 className='text-[#b9b8b8] text-[20px] '>MENU</h1>
          <div className='p-0 mt-3 text-lg font-semibold flex flex-col text-[15px] justify-around h-[60%]'>
          <Link to='/' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-house mr-2"></i>Home</Link>
          <Link to='/profile' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-user mr-2"></i>Profile</Link>
            <Link to='/watchlist' className='no-underline text-[#c9c7c7]'><i className="fa-regular fa-eye mr-2"></i>Watch List</Link>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <span className='text-[#c9c7c7]'><i className="fa-solid fa-magnifying-glass mr-2"></i>Search</span>
              <input type="search" className='bg-[#171029] border-b-2 border-b-[#ccc] px-2 text-white text-[15px] font-normal focus:outline-none'  value={input} onChange={handleChange}/>
            </form>
            <Link to='/signout' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-chevron-left mr-2"></i>sign out</Link>
          </div>
        </div>
    </div>
  )
}

export default SideNav