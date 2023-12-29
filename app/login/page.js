import React from 'react'
import Link from 'next/link'

export default function Login() {

    const leftPhotoLink ="https://5.imimg.com/data5/SELLER/Default/2023/7/321854444/GD/HJ/CO/27157262/divorce-lawyer-consultant-services-500x500.jpg"
    return (
        <div className='md:m-2 md:flex justify-center bg-white gap-4'>
            {/* This is the login box below */}
            <div className='bg-slate-400 md:mt-8  rounded-lg flex flex-col md:mt- md:pt-4 pt-6 w-full    md:w-1/3 self-center'>
                <h2 className=' self-center m-2 text-xl font-bold'>Welcome Back</h2>

                <div className='bg-slate-300 p-6 rounded-tl-3xl  rounded-tr-3xl flex flex-col'>
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
            <div className='flex justify-center '>
                <img className='' src={leftPhotoLink} alt="photo" />
            </div>
        </div>
    )
}
