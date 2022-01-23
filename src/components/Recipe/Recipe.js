import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HotRecipe from "../HotRecipe/HotRecipe"
import "./Recipe.css"

function Recipe (){
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
fetch("http://localhost:5001/recipes").then((response)=>response.json()).then((recipes)=>{
    console.log(recipes) 
    setRecipes(recipes)
})
    },[])
    return(
        <div>
            <HotRecipe/>
            {recipes.map((recipe)=><Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <img src={recipe.image} width="100%"></img>
                <p>ingredients: {recipe.ingredients.join(", ")}</p>
                <p>calories: {recipe.calories} kcl</p>
                <p>quantity: {recipe.quantity} grm</p>
            </Link>)}
        </div>
    )
}
export default Recipe