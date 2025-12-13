import RecipeCard from "@/components/cards/RecipeCard"
import { recipes } from "@/data/recipes"
import { PageShell } from "@/components/layout/PageShell"
import { SectionHeader } from "@/components/domain/SectionHeader"

export default function Recipes() {
  return (
    <PageShell>
      <SectionHeader 
        title="Recipes" 
        description="Here are some of my favorite recipes that fuel my coding sessions:"
      />
      <div className="space-y-6">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </PageShell>
  )
}



