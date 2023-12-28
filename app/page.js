import Navbar from '@/components/Navbar'
import NotLogin from '@/components/NotLogin'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className='m-4'>
        {/* this will the main division for this blocks */}
        <NotLogin/>
      </div>

    </main>
  )
}
