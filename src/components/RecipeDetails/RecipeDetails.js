import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./RecipeDetails.css"
function RecipeDetails() {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5001/recipes/${recipeId}`).then((response) => response.json()).then((recipe) => {
            console.log(recipe)
            setRecipe(recipe)
        })
    }, [recipeId])

    return <div>
        <div className="HotRecipesDetails-container">
            <div className='HotRecipe-items'>
                <h3>{recipe.title}</h3>
                <div className='HotRecipe-items-image'>
                    <img src={recipe.image} />

                </div>
                <p>{recipe.description}</p>
                <p>ingredients: {recipe.ingredients?.join(", ")}</p>
                <p>calories: {recipe.calories} kcl</p>
                <p>quantity: {recipe.quantity} grm</p>
            </div>
        </div>
    </div>
}

export default RecipeDetails