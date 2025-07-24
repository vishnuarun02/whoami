export default function RecipeCard({ title, ingredients, instructions }: { title: string; ingredients: string[]; instructions: string }) {
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
