/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col sm:basis-1 hover:shadow-2xl">
      <h2 className="text-center font-semibold">{props.mealName}</h2>
      <img className="h-[400px] w-[400px]" src={props.image} alt={props.mealName} />
      <div className="px-6 py-4 flex-grow">
        <div className="flex flex-col">
          <div className="font-bold text-xl flex justify-between">Calories: {props.calories}</div>
          <div className="font-semibold text-md pb-3">Servings: {props.servings}</div>
        </div>
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
      <div className="px-6 pt-4 pb-2 mt-auto">
        <a href={props.recipelink}>
          <button className="hover:bg-red-400 inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-300">
            Cooking Instructions
          </button>
        </a>
      </div>
    </div>
  );
}
