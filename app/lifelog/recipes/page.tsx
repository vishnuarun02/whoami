export default function Recipes() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Recipes</h1>

      <p className="mb-6">Here are some of my favorite recipes that fuel my coding sessions:</p>

      <div className="space-y-8">
        <RecipeCard
          title="Brain Boost Smoothie"
          ingredients={[
            "1 banana",
            "1 cup spinach",
            "1 tbsp almond butter",
            "1 cup almond milk",
            "1 scoop protein powder",
            "1 tsp chia seeds",
          ]}
          instructions="Blend all ingredients until smooth. Enjoy cold!"
        />
        <RecipeCard
          title="Coder's Curry"
          ingredients={[
            "1 can chickpeas",
            "1 can diced tomatoes",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 tbsp curry powder",
            "1 cup vegetable broth",
          ]}
          instructions="Sauté onion and garlic. Add remaining ingredients and simmer for 20 minutes. Serve over rice."
        />
        <RecipeCard
          title="Debugger's Delight Cookies"
          ingredients={[
            "2 cups flour",
            "1 cup butter",
            "1 cup brown sugar",
            "2 eggs",
            "1 tsp vanilla extract",
            "1 cup chocolate chips",
          ]}
          instructions="Mix ingredients, drop spoonfuls onto a baking sheet, and bake at 350°F for 10-12 minutes."
        />
      </div>
    </div>
  )
}

function RecipeCard({
  title,
  ingredients,
  instructions,
}: { title: string; ingredients: string[]; instructions: string }) {
  return (
    <div className="border border-text/10 p-6 rounded-lg">
      <h2 className="text-2xl font-heading mb-4">{title}</h2>
      <h3 className="text-xl mb-2">Ingredients:</h3>
      <ul className="list-disc pl-6 mb-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl mb-2">Instructions:</h3>
      <p>{instructions}</p>
    </div>
  )
}

