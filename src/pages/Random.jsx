import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getRandomRecipe } from '../services/api';
import RecipeCard from '../components/RecipeCard';

export default function Random() {
  const [recipe, setRecipe] = useState(null); // Initialize as null to handle the absence of recipe data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRecipe = async () => {
    try {
      const loadedRecipe = await getRandomRecipe();
      // Check if the response contains a meal and set the first meal object
      if (loadedRecipe && loadedRecipe.length > 0) {
        setRecipe(loadedRecipe[0]); // Assuming the response is an array, use the first item
      } else {
        setError("No recipe found.");
      }
    } catch (err) {
      console.log(err);
      setError('Failed to load recipe...');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipe(); // Load the random recipe when the component mounts
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <NavBar />
      
      {loading ? (
        <div className="flex items-center justify-center flex-grow">
          <div className="text-center flex items-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900">
              Loading
            </h1>
            <div className="loading loading-dots loading-lg mt-7"></div>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center flex-grow">
          <h1 className="text-2xl text-red-500">{error}</h1>
        </div>
      ) : (
        <>
          {/* Center the card and button within a flex container */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <RecipeCard recipe={recipe} key={recipe.idMeal} />
            <button onClick={loadRecipe} className="btn btn-secondary mt-6">
              Get Random
            </button>
          </div>
        </>
      )}
    </div>
  );
}