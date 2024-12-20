import React from 'react'
import RecipeDesc from './RecipeDesc'

export default function RecipeCard({recipe}) {
  return (<div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="object-cover h-48 w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {recipe.strMeal}
                <div className="badge badge-secondary ml-2 text-white">{recipe.strCategory}</div>
              </h2>
              <p>Cuisine: {recipe.strArea}</p>
              <div className="card-actions justify-end">
                <RecipeDesc recipe={recipe} key={recipe.idMeal} />
              </div>
            </div>
        </div>
)}
