import './App.css'
import Navbar from './components/Navbar'
import SearchArea from './components/SearchArea'
import MealCard from './components/MealCard'
import useAxios from './hooks/useAxios'
import { createContext, useState } from 'react'
import Footer from './components/Footer'

export const MealContext = createContext();

function App() {
  
  const [searchResult, setSearchResult] = useState('');
  const {response, isLoading, error, fetchData} = useAxios(`api/recipes/v2?type=public&q=Chicken&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&calories=300-500&imageSize=SMALL`
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
      <MealContext.Provider value={value}>
      <Navbar />
      <SearchArea />
      <MealCard />
      </MealContext.Provider>
      <Footer />
    </>
  )
}

export default App
