import React from 'react'

function NotLogin() {
  return (
    <div className='flex justify-center gap-x-4'>
      <div className='md:m p2 flex w-1/ overflow-scroll overflow-x-hidden'>
        {/* <img className='w-full h-full backdrop-blur-' src="marri.jpg" alt="marri" /> */}
        <img className='hidden md:block w-96 rounded-3xl' src="marri2.jpg" alt="marri2" />
        {/* <img className='hidden md:block w-96 rounded-3xl' src="marri2.jpg" alt="marri2" />
        <img className='hidden md:block w-96 rounded-3xl' src="marri2.jpg" alt="marri2" /> */}
      </div>

      <div className='md:w-1/2 flex justify-center align-middle'>
        <div className='md:block hidden self-center bg-blue-400 hover:bg-orange-500 md:w-2/3 md:h-4/5 mt-7 rotate-12 translate-y-2 rounded-2xl'>

        </div>
        <div className='flex md:absolute flex-col  bg-slate-400 hover:bg-orange-400 p-2 rounded-lg md:w-1/3 md:h-2/3  text-1xl md:mt-24 md:pb-4 gap-y-3'>
          {/* form div */}
          <h1 className='self-center text-2xl'>Join now</h1>
          <label htmlFor="">Your Name</label>
          <input className='p-2 rounded-md' type="text" />
          <label htmlFor="email">Your Email</label>
          <input className='p-2 rounded-md' type="email" name="userEmail" id="userEmail" />
          <div className='space-x-4'>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input className='p-2 rounded-md' type="date"  name="" id="dob" min="1970-01-01" max="2023-12-31" />
          </div>
          <label htmlFor="">Gender</label>
          <select className='p-2 rounded-md' name="gender" id="gender" disabled="">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

        <div>
          <button className='bg-slate-500 hover:bg-blue-500 p-3 rounded-lg text-white  '>
            Register Now
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default NotLogin