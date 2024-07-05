/* eslint-disable react-hooks/rules-of-hooks */
import './App.css'
import Navbar from './components/Navbar'
import SearchArea from './components/SearchArea'
import MealCard from './components/MealCard'
import useAxios from './hooks/useAxios'
import { createContext, useState } from 'react'

export const MealContext = createContext();

function App() {
  // set keys
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;
  
  const [searchResult, setSearchResult] = useState('');
  const {response, isLoading, error, fetchData} = useAxios(`api/recipes/v2?type=public&q=Chicken&app_id=${appID}&app_key=${appKey}&calories=300-500&imageSize=SMALL&mealType=Lunch`
  )

  // context values
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchResult,
    setSearchResult,
  }

  

  return (
    <>
      <MealContext.Provider value={value}>
      <Navbar />
      <SearchArea />
      <MealCard />
      </MealContext.Provider>
    </>
  )
}

export default App
