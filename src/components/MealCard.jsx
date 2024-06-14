/* eslint-disable react/no-unknown-property */
import Card from "./Card";
import useAxios from "../hooks/useAxios";
import LoadingPage from "./LoadingPage";

export default function MealCard() {
  const appID = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_APP_KEY;
  const param = `?type=public&beta=false&q=chicken&app_id=${appID}&app_key=${appKey}&calories=300-500&imageSize=LARGE`;
  const { response: mealInfo, isLoading, error } = useAxios(param);

  console.log(mealInfo)

  const createCard = (info) => (
    <Card
      key={info.recipe}
      mealName={info.recipe.label}
      protein={info.recipe.digest[2].total}
      carbs={info.recipe.digest[1].total}
      fat={info.recipe.digest[0].total}
      ingredients={info.recipe.ingredientLines}
      calories={info.recipe.calories}
      image={info.recipe.image}
    />
  );

  if (isLoading) return <LoadingPage item={20}/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto px-4">
      {mealInfo && mealInfo.length > 0 ? mealInfo.map(createCard) : <p>No meals found</p>}
    </div>
  );
}
