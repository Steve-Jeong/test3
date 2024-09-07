import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex gap-4'>
      
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/route-todos">Route-Todos</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default NavBar