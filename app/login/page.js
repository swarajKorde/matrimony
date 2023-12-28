import React from 'react'
import Link from 'next/link'

export default function Login() {
    return (
        <div className='md:m-10 flex justify-center'>
            {/* This is the login box below */}
            <div className='bg-red-500  rounded-lg flex flex-col md:mt-20 pt-4 w-full    md:w-2/5'>
                <h2 className=' self-center m-2 text-xl font-bold'>Welcome Back</h2>
                
                <div className='bg-slate-400 p-6 rounded-tl-3xl  rounded-tr-3xl flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input className=' rounded-md p-2' type="email" name="" id="email" />

                    <label htmlFor="">Password</label>
                    <input className=' rounded-md p-2' type="password" name="" id="password" />

                    <div className='flex flex-col items-center'>
                        <button className='bg-blue-400 p-2  mt-4 rounded-lg'>
                            Login
                        </button>
                        <h3>Not Registered Already </h3>
                        <Link href='/signup'>clikc here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
