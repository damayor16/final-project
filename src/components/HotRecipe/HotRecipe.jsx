import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import "./HotRecipe.css"

export default function HotRecipe() {
    const [hotRecipes, setHotRecipes] = useState([])
    const [searchParams] = useSearchParams()
    useEffect(() => {
        const q = searchParams.get("q")
        if (q) {
            fetch(`http://localhost:5001/hotRecipes?q=${q}`).then((response) => response.json()).then((recipes) => {
                console.log(recipes)
                setHotRecipes(recipes)
            })
        } else {
            fetch("http://localhost:5001/hotRecipes").then((response) => response.json()).then((recipes) => {
                console.log(recipes)
                setHotRecipes(recipes)
            })
        }

    }, [searchParams])
    return (
        <div className='HotRecipe'>
            <h2>What's Hot</h2>
            <div className='HotRecipe-container'>

                {hotRecipes.map((recipe) => <Link to={`/recipe/${recipe.id}`}>
                    <div className='HotRecipe-items'>
                        <h3>{recipe.title}</h3>
                        <div className='HotRecipe-items-image'>
                            <img src={recipe.image} />

                        </div>
                        <p>{recipe.description}</p>
                    </div>
                </Link>)}



            </div>
        </div>
    )
}