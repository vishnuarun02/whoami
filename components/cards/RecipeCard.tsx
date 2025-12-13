import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function RecipeCard({ title, ingredients, instructions }: { title: string; ingredients: string[]; instructions: string }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-heading">{title}</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc pl-6 space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
          <p>{instructions}</p>
        </div>
      </CardContent>
    </Card>
  )
}
