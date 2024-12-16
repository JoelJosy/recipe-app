import React from 'react'

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">😋</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
              <details>
                <summary>Food</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Search</a></li>
                  <li><a>Randomizer</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
