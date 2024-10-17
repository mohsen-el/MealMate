import { useContext, useState } from "react";
import { MealContext } from "../App";

export default function SearchArea() {
  // Import context
  const { fetchData, setSearchResult } = useContext(MealContext);
  
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;

  const [searchValue, setSearchValue] = useState({
    mealSearch: "",
    calorieSearch: "",
  });

  const [showInfo, setShowInfo] = useState(false)

  const handleClick = () => {
    const query = `api/recipes/v2?type=public&q=${searchValue.mealSearch}&app_id=${appID}&app_key=${appKey}&calories=${searchValue.calorieSearch}&imageSize=LARGE`;
    fetchData(query);
    setSearchResult(searchValue); 
    setSearchValue({ mealSearch: "", calorieSearch: "" }); // Reset the input fields
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleHover = () => {
    setShowInfo(true)
  }

  return (
    <div className="bg-gray-900 flex items-center py-4">
      <div className="max-w-md mx-auto w-auto">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            name="mealSearch"
            onChange={handleChange}
            value={searchValue.mealSearch}
            placeholder="Recipe search"
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:caret-amber-100"
          />
          {/* calories input area */}
          <div className="flex items-center gap-1">
          <input
            name="calorieSearch"
            onChange={handleChange}
            value={searchValue.calorieSearch}
            placeholder="Calories"
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:caret-amber-100 h-8"
          />
          <i className="fa-regular fa-circle-question fa-xl text-blue-400 cursor-pointer" onMouseOver={handleHover} onMouseOut={() => setShowInfo(false)}>
          </i>
          <div>
            {showInfo && (
              <div className="h-[150px] w-[100px] bg-gray-700 text-white p-2 rounded-lg absolute opacity-80">
                <p className="text-sm">Enter a number to set the maximum or a range like 200-500</p>
              </div>
            )}
          </div>
          </div>
          <button
            disabled={!searchValue.calorieSearch | !searchValue.mealSearch}
            className="bg-red-300 hover:bg-red-400 rounded-lg px-1 py-1 disabled:bg-gray-500"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
