import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("")

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prev) => [...prev, newIngredient])
    }

    async function handleGetRecipe() {
        const response = await getRecipeFromMistral(ingredients)
        setRecipe(response)
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient" 
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    handleGetRecipe={handleGetRecipe}
                />
            }
            {recipe && 
                <ClaudeRecipe recipe={recipe} />
            }
        </main>
    )
}