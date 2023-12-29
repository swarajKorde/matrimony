import React from 'react'

function Aspirants() {
    const imageLing ="https://media.istockphoto.com/id/1056445786/photo/serious-young-man-headshot.jpg?s=612x612&w=0&k=20&c=rHdF_IyORKxLspb2WngEnl3_-R6Mm4eaWEYFjs9qRLA="
  return (
    <main className='flex gap-3 w-58 bg-blue-200 p-2 px-4 rounded-md'>
        <div className='img'>
            {/* Div is for image */}
        <img className='h-40 w-max rounded-md' src={imageLing} alt="The Profile" />
        </div>
        <div className='info self-center align text-justify relative'>
                <h1>Name : Hitesh Chaudhary</h1>
                <h1>Age : 21</h1>
                <h1>Education: MCA</h1>
                <h1>Currently working as a Jr. Developer</h1>
                <button className='rounded-sm bg-slate-500 text-white p-1 mt-2 flex '>View</button>
        </div>
    </main>
  )
}

export default Aspirants