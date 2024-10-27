import { useContext, useState } from "react";
import { MealContext } from "../App";

export default function SearchArea() {
  const { fetchData, setSearchResult } = useContext(MealContext);
  
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;

  const [searchValue, setSearchValue] = useState({
    mealSearch: "",
    calorieSearch: "",
  });

  const [selectedDiet, setSelectedDiet] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    let query = `api/recipes/v2?type=public&q=${searchValue.mealSearch}&app_id=${appID}&app_key=${appKey}&calories=${searchValue.calorieSearch}&imageSize=LARGE`;

    if (selectedDiet) {
      query += `&diet=${selectedDiet}`;
    }

    fetchData(query);
    setSearchResult(searchValue); 
    setSearchValue({ mealSearch: "", calorieSearch: "" });
    setSelectedDiet(""); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleDietChange = (event) => {
    setSelectedDiet(event.target.value);
  };

  const handleHover = () => {
    setShowInfo(true);
  };

  const handleLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="bg-gray-900 flex items-center py-4">
      <div className="max-w-md mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center">
          <input
            name="mealSearch"
            onChange={handleChange}
            value={searchValue.mealSearch}
            placeholder="Recipe search"
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:caret-amber-100 w-full sm:w-auto"
          />
          <div className="flex flex-row items-center gap-2">
            <input
              name="calorieSearch"
              onChange={handleChange}
              value={searchValue.calorieSearch}
              placeholder="Calories"
              className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none focus:caret-amber-100 h-8 w-full sm:w-auto"
            />
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="relative"
            >
              <i className="fa-regular fa-circle-question fa-xl text-blue-400 cursor-pointer" />
              {showInfo && (
                <div className="absolute left-0 top-8 h-[150px] w-[100px] bg-gray-700 text-white p-2 rounded-lg opacity-80 z-10">
                  <p className="text-sm">Enter a number to set the maximum or a range like 200-500</p>
                </div>
              )}
            </div>
          </div>
          <select
            value={selectedDiet}
            onChange={handleDietChange}
            className="border-2 rounded-lg focus:border-amber-200 focus:ring-1 focus:outline-none w-full sm:w-auto"
          >
            <option value="">Select Diet</option>
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High Fiber</option>
            <option value="high-protein">High Protein</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-fat">Low Fat</option>
            <option value="low-sodium">Low Sodium</option>
          </select>
          <button
            disabled={!searchValue.calorieSearch || !searchValue.mealSearch}
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
