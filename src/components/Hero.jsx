import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate(); 

  return (
    <div>
      <div className="hero bg-transparent min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Discover Recipes
            </h1>
            <p className="py-6 mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Find new and exciting dishes to try. Whether you're looking for a quick meal or an adventurous recipe, we’ve got you covered!
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Search Recipes Button */}
              <button
                className="btn btn-primary"
                onClick={() => navigate("/search")} // Navigate programmatically
              >
                Search Recipes
              </button>

              {/* Link to Random Page */}
              <Link to="/random" className="text-sm/6 font-semibold text-gray-900">
                Pick random <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}