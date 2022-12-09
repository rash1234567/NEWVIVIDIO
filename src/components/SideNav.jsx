import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import './navbarStyle/Navbar.css'

function SideNav() {
  const {handleSubmit, input, handleChange,user} = useUserAuth();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
    <div className='absolute right-5 z-20 lg:hidden top-4' onClick={showSidebar}>
            <i className="fa-solid fa-bars text-white" style={{fontSize:'20px' }}></i>
      </div>
      <div className="logo mx-auto top-3 z-20 left-3 absolute lg:left-[10%]" style={{fontSize:'20px' }}>
            <i className="fa-solid fa-v" style={{ color:'white' }}></i>
            <i className="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
            <i className="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
            <i className="fa-solid fa-video" style={{ color:'white' }}></i>
      </div>
    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='mt-[55px] ml-4 h-[80%]'>
          <h1 className='text-[#b9b8b8] text-[20px] mt-4 '>MENU</h1>
          <div className='p-0 mt-3 text-lg font-semibold flex flex-col text-[15px] justify-around h-[60%]' onClick={showSidebar}>
            <Link to='/' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-house mr-2"></i>Home</Link>
            <Link to='/profile' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-user mr-2"></i>Profile</Link>
            <Link to='/watchlist' className='no-underline text-[#c9c7c7]'><i className="fa-regular fa-eye mr-2"></i>Watch List</Link>
            <form className='flex flex-col p-0' onSubmit={handleSubmit}>
              <p className='text-[#c9c7c7]'><i className="fa-solid fa-magnifying-glass mr-2 ml-0"></i>Search</p>
              <input type="search" className='bg-transparent border-b-2 border-b-[#ccc] px-1 text-white text-[15px] font-normal focus:outline-none'  value={input} onChange={handleChange}/>
            </form>
            {
              user?
              <Link to='/signout' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-chevron-left mr-2"></i>Sign out</Link>
              :
              <Link to='/login' className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-chevron-left mr-2"></i>Sign in</Link>
            }
            
          </div>
        </div>
    </div>
    </>
  )
}

export default SideNav