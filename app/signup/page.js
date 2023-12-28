import Link from 'next/link'
import React from 'react'


function Signup() {
    return (
        <div className='md:m-4 md:p-4 bg-white text-black'>
            {/* main division */}

            <div className='flex flex-col md:flex-row md:justify-between  items-center'>
                {/* horrizontal line of logo and already a member */}
                <img className='mt-2' src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png" alt="" />

                <div className='flex space-x-2'>
                    <h4>Already a member</h4>
                    <Link href='/login'>Login</Link>
                </div>

            </div>


            <div className='flex justify-center md:mt-10'>
                <div className='flex flex-col p-10 w-full space-y-2 md:w-1/2 bg-slate-300 md:shadow- md:shadow-red-500 shadow'>
                    {/* div of form */}
                    <label htmlFor="">Name</label>
                    <input className=' rounded-md p-2' type="text" />

                    <label htmlFor="">Last Name</label>
                    <input className=' rounded-md p-2' type="text" />

                    <div className='space-x-3'>
                     <label htmlFor="">Gender</label>
                        <select name="Gender" id="Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        
                    </div>

                    <label htmlFor="">Email</label>
                    <input className=' rounded-md p-2' type="email" />

                    <label htmlFor="">Password</label>
                    <input className=' rounded-md p-2' type="password" />

                    <label htmlFor="">Re enter Password </label>
                    <input className=' rounded-md p-2' type="password" />

                    <button className='bg-blue-400 p-2 w-fit mt-10 rounded-xl'>Continue</button>
                </div>

                <div>
                    {/* image div */}
                </div>
            </div>




        </div>
    )
}

export default Signup