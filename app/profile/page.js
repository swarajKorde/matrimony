import Aspirants from '@/components/Aspirants'
import Navbar from '@/components/Navbar'
import React from 'react'

function Profile() {
  return (
    <main className='m bg-red-400 h-full '>
        <Navbar/>
        <div className='m-2 mt-16 p-2 flex gap-4 flex-wrap  order-last'>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
                <Aspirants/>
        </div>
    </main>
  )
}

export default Profile