"use client"
import NotLogin from '@/components/NotLogin'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   redirect('/signup');
  // }, []);
  return (
    <main className="">
    
      <div className='m-4'>
        {/* this will the main division for this blocks */}
        <NotLogin/>
      </div>

    </main>
  )
}
