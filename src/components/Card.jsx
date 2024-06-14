/* eslint-disable react/prop-types */
export default function Card(props) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <h2 className="text-center">Meal Name: {props.mealName}</h2>
        <img className="w-full" src={props.image} alt={props.mealName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Calories: {props.calories}</div>
          <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Protein: {props.protein}</span>
          <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Carbs: {props.carbs}</span>
          <span className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1">Fat: {props.fat}</span>
          <h3>Ingredients</h3>
          <ul>
            {props.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href="#"><button><span className="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cooking Instructions</span></button></a>
        </div>
      </div>
    );
  }
  