import RecipeCard from "../../components/RecipeCard"
import { recipes } from "../../data/recipes"

export default function Recipes() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Recipes</h1>

      <p className="mb-6">Here are some of my favorite recipes that fuel my coding sessions:</p>

      <div className="space-y-8">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </div>
  )
}



