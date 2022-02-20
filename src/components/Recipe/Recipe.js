import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import HotRecipe from "../HotRecipe/HotRecipe"
import "./Recipe.css"

function Recipe() {
    const [recipes, setRecipes] = useState([])
    const [searchParams] = useSearchParams()
    useEffect(() => {
        const q = searchParams.get("q")
        if (q) {
            fetch(`http://localhost:5001/recipes?q=${q}`).then((response) => response.json()).then((recipes) => {
                console.log(recipes)
                setRecipes(recipes)
            })
        } else {
            fetch("http://localhost:5001/recipes").then((response) => response.json()).then((recipes) => {
                console.log(recipes)
                setRecipes(recipes)
            })
        }

    }, [searchParams])
    return (
        <div>
            <HotRecipe />
            <div className='HotRecipe'>
                <h2>Recipes</h2>
                <div className='HotRecipe-container'>

                    {recipes.map((recipe) => <Link to={`/recipe/${recipe.id}`}>
                        <div className='HotRecipe-items'>
                            <h3>{recipe.title}</h3>
                            <div className='HotRecipe-items-image'>
                                <img src={recipe.image} />

                            </div>
                            {/* <p>{recipe.description}</p>
                            <p>ingredients: {recipe.ingredients.join(", ")}</p>
                            <p>calories: {recipe.calories} kcl</p>
                            <p>quantity: {recipe.quantity} grm</p> */}
                        </div>
                    </Link>)}



                </div>
            </div>
        </div>
    )
}
export default Recipe