/* eslint-disable react-hooks/rules-of-hooks */
import './App.css'
import Navbar from './components/Navbar'
import SearchArea from './components/SearchArea'
import MealCard from './components/MealCard'
import useAxios from './hooks/useAxios'
import { createContext, useState } from 'react'

export const mealContext = createContext();

function App() {
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;
  
  const [searchResult, setSearchResult] = useState('');
  const {response, isLoading, error, fetchData} = useAxios(
    `?type=public&beta=false&q=chicken&app_id=${appID}&app_key=${appKey}&calories=300-500&imageSize=LARGE`
  )

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
      <mealContext.Provider value={value}>
      <Navbar />
      <SearchArea />
      <MealCard />
      </mealContext.Provider>
    </>
  )
}

export default App
