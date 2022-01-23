import { useEffect } from "react"
import HotRecipe from "../HotRecipe/HotRecipe"
import RecipeOfTheDay from "../RecipeofTheDay/RecipeOfTheDay"
import "./Homepage.css"



function Homepage() {  
    useEffect(() => {
      
        
    }, [])  
    
    return <>   
    <section>
    <div className="slider-container">
            <div className="slider-section">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2021%252F07%252F13%252FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85" />
            <div className="slider-section-text">
                <h1>Homemade delicious burger</h1>
                <p>Meat base recipe</p>
                <div className='slider-section-button'>
                    <a href="\"> see more</a>
                </div>
            </div>
        </div>
        <div className="slider-section" style={{display:"none"}}>
            <img src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
            <div className="slider-section-text">
                <h1>Homemade Delicious Salad</h1>
                <p>Vegan base recipe</p>
                <div className='slider-section-button'>
                    <a href="\"> see more</a>
                </div>
            </div>
        </div>
        <div className="slider-section" style={{display:"none"}}>
            <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <div className="slider-section-text">
                <h1>Homemade Delicious Cheesecake</h1>
                <p>Sweet base recipe</p>
                <div className='slider-section-button'>
                    <a href="\"> see more</a>
                </div>

            </div>
        </div>
        </div>
        </section>
        <section >
     
        <HotRecipe/>
        <RecipeOfTheDay/>
        </section>
        </> 
}       

export default Homepage