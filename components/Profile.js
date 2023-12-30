import React from 'react'

function Profile() {
    const imageLing ="https://media.istockphoto.com/id/1056445786/photo/serious-young-man-headshot.jpg?s=612x612&w=0&k=20&c=rHdF_IyORKxLspb2WngEnl3_-R6Mm4eaWEYFjs9qRLA="

  return (
    <main>
        {/* containing the information */}
        <div className='m-5'>

            <div className='md:flex justify-center md:gap-x-12 '>
                {/* First div of Picture and name */}
                <img className='h-48 rounded-full' src={imageLing} alt="" />
                <h1 className='self-center'>Your Name</h1>
            </div>

            <div className='md:flex md:m-12 gap-x-3'>
                {/* the div of information */}
                <div className='w-1/2 flex flex-col gap-4 '>

                    <div className='about-me '>
                            <h1>About Me</h1>

                            <div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor neque temporibus assumenda quisquam illum ipsa tempore placeat suscipit reiciendis possimus adipisci excepturi, voluptatum aut id est natus, et perferendis velit.
                                </p>
                            </div>
                    </div>
                    
                    <div className='contact'>
                        <div className='address'>
                            <h1>Current Residence</h1>
                            <h1>Anjangaon Road Akot</h1>
                        </div>

                    </div>

                    <div className='hobbies'>
                            <h1 className='font-bold'>Hobbies</h1>
                    </div>
                </div>
                    <hr className='' />
                <div className='flex flex-col gap-y-4 border-l-2 border-black pl-4'>
                        <div>
                            {/* Education */}
                            <h1>School</h1>
                            <h1>
                                Krushi Vidyalaya Amravati
                            </h1>
                        </div>
                        <div>
                            {/* Job */}
                            <h1>Job</h1>
                            <h1>Currently Jobless</h1>
                        </div>
                </div>
            </div>

        </div>
    </main>
  )
}

export default Profile