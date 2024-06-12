/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { useState } from "react"
export default function MealCard() {
    const [label, setLable] = useState('');
    const [calories, setCalories] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fat, setFat] = useState('')
    const [ingredients, setIngredients] = useState('') 

    const URL = `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=chicken&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&calories=300-500&imageSize=LARGE`

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                console.log(json.hits)
            })
        }
        fetchData()
    }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 
      my-10 max-w-7xl mx-auto px-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-center">meal name {label}</h2>
            <img className="w-full" src="https://www.nestleprofessional.co.za/sites/default/files/styles/np_hero_small_small/public/2022-10/Commercial%20Coffee%20Machines%20768x576px.jpg?itok=CEMSdm2x" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">calories: {calories}</div>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Protein: {protein}</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Carbs: {carbs}</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Fat: {fat}</span>
            <h3>Ingredients</h3>
            <ul>
            {/* add map function */}
                <li>{ingredients}</li>
                <li>ingredient2</li>
                <li>ingredient3</li>
                <li>ingredient4</li>
            </ul>
        </div>
        <div className="px-6 pt-4 pb-2">
             <a><button><span class="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cooking Instructions</span></button></a>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-center">meal name</h2>
            <img className="w-full" src="https://www.nestleprofessional.co.za/sites/default/files/styles/np_hero_small_small/public/2022-10/Commercial%20Coffee%20Machines%20768x576px.jpg?itok=CEMSdm2x" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">calories: 300</div>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Protein: 30g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Carbs: 50g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Fat: 20g</span>
            <h3>Ingredients</h3>
            <ul>
                <li>ingredient1</li>
                <li>ingredient2</li>
                <li>ingredient3</li>
                <li>ingredient4</li>
            </ul>
        </div>
        <div className="px-6 pt-4 pb-2">
             <a><button><span class="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cooking Instructions</span></button></a>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-center">meal name</h2>
            <img className="w-full" src="https://www.nestleprofessional.co.za/sites/default/files/styles/np_hero_small_small/public/2022-10/Commercial%20Coffee%20Machines%20768x576px.jpg?itok=CEMSdm2x" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">calories: 300</div>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Protein: 30g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Carbs: 50g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Fat: 20g</span>
            <h3>Ingredients</h3>
            <ul>
                <li>ingredient1</li>
                <li>ingredient2</li>
                <li>ingredient3</li>
                <li>ingredient4</li>
            </ul>
        </div>
        <div className="px-6 pt-4 pb-2">
             <a><button><span class="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cooking Instructions</span></button></a>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-center">meal name</h2>
            <img className="w-full" src="https://www.nestleprofessional.co.za/sites/default/files/styles/np_hero_small_small/public/2022-10/Commercial%20Coffee%20Machines%20768x576px.jpg?itok=CEMSdm2x" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">calories: 300</div>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Protein: 30g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Carbs: 50g</span>
            <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Fat: 20g</span>
            <h3>Ingredients</h3>
            <ul>
                <li>ingredient1</li>
                <li>ingredient2</li>
                <li>ingredient3</li>
                <li>ingredient4</li>
            </ul>
        </div>
        <div className="px-6 pt-4 pb-2">
             <a><button><span class="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cooking Instructions</span></button></a>
        </div>
        </div>
    </div>
  )
}
