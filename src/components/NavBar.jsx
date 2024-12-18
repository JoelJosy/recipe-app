import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <Link to='/' className='btn btn-ghost text-2xl'>😋</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li><Link to='/' className='font-medium text-lg'>Home</Link></li>
            <li>
              <details>
                <summary className='text-lg font-medium'>Food</summary>
                <ul className="bg-base-100 text-base rounded-t-none p-2">
                  <li><Link to='/search' className='text-lg' >Search</Link></li>
                  <li><Link to='/random' className='text-lg' >Random</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
