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
  });

  const handleClick = () => {
    const query = `api/recipes/v2?type=public&q=${searchValue.mealSearch}&app_id=${appID}&app_key=${appKey}&calories=${searchValue.calorieSearch}&imageSize=LARGE`;
    fetchData(query);
    setSearchResult(searchValue); // Update the search result context
    setSearchValue({ mealSearch: "", calorieSearch: "" }); // Reset the input fields
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-md mx-auto w-auto">
        <div className="flex space-x-4">
          <input
            name="mealSearch"
            onChange={handleChange}
            value={searchValue.mealSearch}
            placeholder="Meal type"
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:ring-amber-100"
          />
          <input
            name="calorieSearch"
            onChange={handleChange}
            value={searchValue.calorieSearch}
            placeholder="Calories"
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:ring-amber-100"
          />
          <button
            className="bg-red-300 hover:bg-red-400 rounded-lg px-1 py-1"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
