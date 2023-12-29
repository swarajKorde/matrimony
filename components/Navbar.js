import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 text-white py-4 md:px-6  px-4 flex md:flex-row flex-col  items-center justify-between">
      <h1 className="text-2xl font-bold">Matrimony</h1>
      <ul className="flex items-center space-x-4 ">
        <li>
          <Link className="md:hover:text-blue-500" href="/" >
           Home
          </Link>
        </li>
        <li>
          <Link className='' href="/profile">Profile</Link>
        </li>
        <li>
          <Link className="hover:text-blue-500" href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar