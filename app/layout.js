import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
// import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matrimony',
  description: 'This is what it is',
}

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   // Code that uses window goes here
  //   window.alert('Site is in development phase')
  // }, [])
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
