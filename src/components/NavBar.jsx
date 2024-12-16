import React from 'react'

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">😋</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li><a className='text-lg font-medium'>Home</a></li>
            <li>
              <details>
                <summary className='text-lg font-medium'>Food</summary>
                <ul className="bg-base-100 text-base rounded-t-none p-2">
                  <li><a>Search</a></li>
                  <li><a>Random</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
