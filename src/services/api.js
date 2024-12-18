export const getRecipesApi = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await response.json();

    return data.meals;
}

export const searchRecipesApi = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.meals;
  };
  
  