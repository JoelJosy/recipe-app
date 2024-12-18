import React from 'react'
import NavBar from '../components/NavBar'
import Searchbar from '../components/Searchbar'
import RecipeCard from '../components/RecipeCard'

const recipes = [   {idMeal: 1, strMeal: "Chicken Biryani", strCategory: "Chicken", strMealThumb: "./", strArea: "Iranian"}, 
                    {idMeal: 2, strMeal: "Lamb Biryani", strCategory: "Lamb", strMealThumb: "./", strArea: "Arabic"},
                    {idMeal: 3, strMeal: "Pudding", strCategory: "Dessert", strMealThumb: "./", strArea: "English"}
                  ];

export default function Search() {
  return (
    <>
      <NavBar />
      <Searchbar />

      <div className="recipes-grid flex flex-wrap justify-center gap-6 p-4">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.idMeal}/>
        ))}
      </div>

    </>
  )
}
