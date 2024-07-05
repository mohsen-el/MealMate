import { useContext, useState } from "react";
import { MealContext } from "../App";

export default function SearchArea() {
  // Import context
  const { fetchData, setSearchResult } = useContext(MealContext);
  // App keys
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;

  const [searchValue, setSearchValue] = useState({
    mealSearch: "",
    calorieSearch: "",
    mealType:"",
  });

  const handleClick = () => {
    const query = `api/recipes/v2?type=public&q=${searchValue.mealSearch}&app_id=${appID}&app_key=${appKey}&calories=${searchValue.calorieSearch}&imageSize=LARGE&mealType=${searchValue.mealType}`;
    fetchData(query);
    setSearchResult(searchValue); // Update the search result context
    setSearchValue({ mealSearch: "", calorieSearch: "", mealType:""}); // Reset the input fields
  };

  // handle search field change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  console.log(searchValue)

  // listen to enter click
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      const { name, value } = event.target;
      setSearchValue((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  }

  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-md mx-auto w-auto">
        <div className="lg:flex lg:space-x-4 md:space-x-2 sm:flex sm:flex-row">
          <input
            name="mealSearch"
            onChange={handleChange}
            value={searchValue.mealSearch}
            placeholder="Meal Ingredients"
            onKeyDown={handleEnterPress}
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:ring-amber-100"
          />
          <input
            name="calorieSearch"
            onChange={handleChange}
            value={searchValue.calorieSearch}
            placeholder="Calories"
            onKeyDown={handleEnterPress}
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:ring-amber-100"
          />

          {/* drop down menu */}
          <select 
          value={searchValue.mealType}
          name="mealType"
          className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:ring-amber-100 h-8"
          onChange={handleChange}>
            <option value="">Select Meal Time</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <div>
          <button
            className="bg-red-300 hover:bg-red-400 rounded-lg px-1 py-1 disabled:bg-gray-300"
            onClick={handleClick}
            disabled={!searchValue.mealSearch || !searchValue.calorieSearch || searchValue.mealType===""}
            >Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
