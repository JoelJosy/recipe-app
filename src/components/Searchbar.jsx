import React from 'react'

export default function Searchbar() {
  return (
    <div className='search-bar my-12'>
        <div className="flex items-center w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full shadow-sm"
          />
          <button className="btn btn-primary ml-2 shadow-md">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
    </div>
  )
}
