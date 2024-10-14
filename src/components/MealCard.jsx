import { useContext } from "react";
import Card from "./Card";
import LoadingPage from "./LoadingPage";
import { MealContext } from "../App";

export default function MealCard() {
  const { response: mealInfo, isLoading, error } = useContext(MealContext);

  const createCard = (info, index) => (
    <Card
      key={index}
      mealName={info.recipe.label}
      protein={Math.round(info.recipe.digest[2]?.total/info.recipe.yield)}
      carbs={Math.round(info.recipe.digest[1]?.total/info.recipe.yield)}
      fat={Math.round(info.recipe.digest[0]?.total/info.recipe.yield)}
      ingredients={info.recipe.ingredientLines}
      calories={Math.round(info.recipe.calories/info.recipe.yield)}
      image={info.recipe.image}
      recipelink={info.recipe.url}
    />
  );

  if (isLoading) return <LoadingPage item={20} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:object-center justify-items-center lg:grid-cols-3 xl:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto px-4">
      {mealInfo && mealInfo.length > 0 ? mealInfo.map((info, index) => createCard(info, index)) : <p>No meals found</p>}
    </div>
  );
}
