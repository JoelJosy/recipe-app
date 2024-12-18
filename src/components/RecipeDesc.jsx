import React from 'react'

export default function RecipeDesc({recipe}) {
  return (
    <div>
        <button className="btn btn-primary" onClick={()=>document.getElementById(`recipe-desc-${recipe.idMeal}`).showModal()}>View Recipe</button>
        <dialog id={`recipe-desc-${recipe.idMeal}`} className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            
            
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  )
}
