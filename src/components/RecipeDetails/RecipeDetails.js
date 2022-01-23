import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./RecipeDetails.css"
function RecipeDetails () {
    const {recipeId}=useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(()=>{
fetch(`http://localhost:5001/recipes/${recipeId}`).then((response)=>response.json()).then((recipe)=>{
    console.log(recipe)
    setRecipe(recipe)
})
    },[recipeId])

    return <div>
        <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <img src={recipe.image} width="100%"></img>
                <p>ingredients: {recipe.ingredients.join(", ")}</p>
                <p>calories: {recipe.calories} kcl</p>
                <p>quantity: {recipe.quantity} grm</p>
    </div>
}

export default RecipeDetails