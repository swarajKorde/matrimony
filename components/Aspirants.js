import React from 'react'

function Aspirants() {
    const imageLing ="https://media.istockphoto.com/id/1056445786/photo/serious-young-man-headshot.jpg?s=612x612&w=0&k=20&c=rHdF_IyORKxLspb2WngEnl3_-R6Mm4eaWEYFjs9qRLA="
  return (
    <main className='flex gap-1  w-58 bg-indigo-500 text-white border-t-4 border-b-4 border-yellow-400   p-2 md:px-4 rounded-md'>
        <div className='img w-1/3  rounded-md'>
            {/* Div is for image */}
        <img className='h-40 rounded-lg' src={imageLing} alt="The Profile" />
        </div>
        <div className='info self-center align text-justify relative w-2/3'>
                <h1>Name : Hitesh Chaudhary</h1>
                <h1>Age : 21</h1>
                <h1>Education: MCA</h1>
                <h1>Currently working as a Jr. Developer</h1>
                <hr  className='border-red-500' />
                <button className='rounded-lg px-2 bg-blue-500 text-white p-1 mt-2 flex '>View</button>
        </div>
    </main>
  )
}

export default Aspirants