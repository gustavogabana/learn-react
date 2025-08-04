import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = useState(false)

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prev) => [...prev, newIngredient])
    }

    function handleShowRecipe() {
        setRecipeShown(!recipeShown)
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
                    handleShowRecipe={handleShowRecipe}
                />
            }
            {recipeShown && 
                <ClaudeRecipe />
            }
        </main>
    )
}