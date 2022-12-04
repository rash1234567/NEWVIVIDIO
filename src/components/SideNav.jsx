import React from 'react'

function SideNav() {
  return (
    <div className='bg-[#171029] w-[20vw] h-[100vh]  flex flex-col px-8 py-2 '>
        <div className="logo mx-auto" style={{fontSize:'20px' }}>
          <i class="fa-solid fa-v" style={{ color:'white' }}></i>
          <i class="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
          <i class="fa-brands fa-edge-legacy" style={{ color:'white' }}></i>
          <i class="fa-solid fa-video" style={{ color:'white' }}></i>
        </div>
        <div className='mt-4 ml-4 h-[80%]'>
          <h1 className='text-[#b9b8b8] text-[20px] '>MENU</h1>
          <div className='p-0 mt-3 text-lg font-semibold flex flex-col text-[15px] justify-around h-[60%]'>
            <a href="" className='no-underline text-[#c9c7c7]'><i className="fa-solid fa-house mr-2"></i>Home</a>
            <a href="" className='no-underline text-[#c9c7c7]'><i class="fa-solid fa-user mr-2"></i>Profile</a>
            <a href="" className='no-underline text-[#c9c7c7]'><i class="fa-regular fa-eye mr-2"></i>Watch List</a>
            <div className='flex flex-col'>
              <span className='text-[#c9c7c7]'><i class="fa-solid fa-magnifying-glass mr-2"></i>Search</span>
              <input type="text" className='bg-[#171029] border-b-2 border-b-[#ccc] px-2 text-white text-[15px] font-normal focus:outline-none' />
            </div>
            <a href="" className='no-underline text-[#c9c7c7]'><i class="fa-solid fa-chevron-left mr-2"></i>Log out</a>
          </div>
        </div>
    </div>
  )
}

export default SideNav