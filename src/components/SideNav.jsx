import React from 'react'

function SideNav() {
  return (
    <div className='bg-[#171029] w-[20vw] h-[100vh] flex flex-col p-8'>
        <div className="logo d-flex" style={{fontSize:'20px' }}>
          <i class="fa-solid fa-v" style={{ color:'white' }}></i>
          <i class="fa-solid fa-video" style={{ color:'white' }}></i>
        </div>
        <div className='mt-14 ml-4 h-[80%]'>
          <h1 className='text-[#b9b8b8] text-[16px]'>MENU</h1>
          <div className='p-0 mt-6 text-lg font-semibold flex flex-col justify-around h-[80%]'>
            <a href="" className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-house mr-2"></i>Home</a>
            <a href="" className='no-underline text-[#c9c7c7]'><i class="fa-solid fa-user mr-2"></i>Profile</a>
            <div className='flex flex-col'>
              <span className='text-[#c9c7c7]'><i class="fa-solid fa-magnifying-glass mr-2"></i>Search</span>
              <input type="text" className='bg-[#171029] border-b-2 border-b-[#ccc] px-2 text-white text-[15px] font-normal focus:outline-none' />
            </div>
            <a href="" className='no-underline text-[#c9c7c7]'><i class="fa-solid fa-chevron-left mr-2"></i>log-out</a>
          </div>
        </div>
    </div>
  )
}

export default SideNav