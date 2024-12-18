import React from 'react';

export default function RecipeDesc({ recipe }) {
  // Helper to extract ingredients and measurements
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  const getInstructions = () => {
    const instList = recipe.strInstructions.split(/\n|\./); // Corrected regex
    return instList
      .map(inst => inst.trim()) // Trim each instruction
      .filter(step => step.length > 0); // Remove empty steps
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          document.getElementById(`recipe-desc-${recipe.idMeal}`).showModal()
        }
      >
        View Recipe
      </button>

      <dialog id={`recipe-desc-${recipe.idMeal}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>

          <p className="text-sm text-gray-500 mb-2">
            Tags: {recipe.strTags ? recipe.strTags.split(",").join(", ") : "N/A"}
          </p>
          <p className="text-lg mb-4">
            Cuisine: <span className="font-medium">{recipe.strArea}</span>
          </p>

          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside mb-4">
            {getIngredients().map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Instructions</h3>

          <ol className="ml-4 mb-4 list-decimal">
            {getInstructions().map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Watch on YouTube
            </a>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}