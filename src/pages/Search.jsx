import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import RecipeCard from '../components/RecipeCard'

const recipes = [   {idMeal: 1, strMeal: "Chicken Biryani", strCategory: "Chicken", strMealThumb: "./", strArea: "Iranian"}, 
                    {idMeal: 2, strMeal: "Lamb Biryani", strCategory: "Lamb", strMealThumb: "./", strArea: "Arabic"},
                    {idMeal: 3, strMeal: "Pudding", strCategory: "Dessert", strMealThumb: "./", strArea: "English"},
                    {idMeal: 4, strMeal: "Pulao", strCategory: "Vegetarian", strMealThumb: "./", strArea: "Indian"}
                  ];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSearch = () => {

  };



  return (
    <>
      <NavBar />
      {/* Seach Button */}
      <div className='search-bar my-12'>
          <form onSubmit={handleSearch} className='flex items-center w-full max-w-md mx-auto'>
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className="btn btn-primary ml-2 shadow-md">
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
      </div>

      {/* Error page */}
      {error && 
      <div className="flex mt-64 items-center justify-center">
        <h1 className="text-center text-5xl font-semibold tracking-tight text-gray-900">
            Error, cannot load recipe...
        </h1>
      </div>}

      {/* Grid */}
      {loading ? (
        // Loading
        <div className="flex mt-64 items-center justify-center">
          <div className="text-center flex items-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900">
                Loading
            </h1>
            <div className="loading loading-dots loading-lg mt-7"></div>
          </div>
        </div>
      ) : (
        // Grid
        <div className="recipes-grid flex flex-wrap justify-center gap-6 p-4">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.idMeal}/>
        ))}
        </div>
      )}
      

    </>
  )
}
