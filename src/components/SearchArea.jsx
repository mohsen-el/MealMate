import { useContext, useState } from "react";
import { MealContext } from "../App";

export default function SearchArea() {
  // import context
  const { fetchData, setSearchResult } = useContext(MealContext);
  // App keys
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;

  const [searchValue, setSearchValue] = useState({
    mealSearch: "",
    calorieSearch: "",
  });

  const handleClick = () => {
    fetchData(`api/recipes/v2?type=public&q=${searchValue.mealSearch}&app_id=${appID}&app_key=${appKey}&calories=${searchValue.calorieSearch}&imageSize=LARGE`);
    setSearchValue({ mealSearch: "", calorieSearch: "" });
    setSearchResult(searchValue);
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setSearchValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-md mx-auto w-auto">
        <div className="flex space-x-4">
          <input
            name="mealSearch"
            onChange={handleChange}
            value={searchValue.mealSearch}
            placeholder="Meal type"
            className="rounded-lg focus:border-red-100 focus:ring-1 focus:outline-none focus:ring-red-100"
          />
          <input
            name="calorieSearch"
            onChange={handleChange}
            value={searchValue.calorieSearch}
            placeholder="Calories"
            className="rounded-lg"
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
