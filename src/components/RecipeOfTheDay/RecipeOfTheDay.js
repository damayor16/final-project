import React from 'react'
import './RecipeOfTheDay.css'
import { Link } from 'react-router-dom'

export default function RecipeOfTheDay() {
    const increasebythree=(i)=>{

    }
    return (
        <div className='RecipeOfTheDay'>
            <div className='RecipeOftheDay_header'>
                <h3>Latest News  </h3>
                
            </div>
            <div className='RecipeOfTheDay_fourRow_container'>
                <a href='/'>
                <div className='RecipeOfTheDay_fourRow'>
                    <img src='https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'/>
                    <div className='RecipeOfTheDay_fourRow_blog_title'>
                    <span className='RecipeOfTheDay_fourRow_border'>
                        Pizza with stuffed cheese dough
                    </span>
                    <div className='short-seperator'></div>
                    <div className='RecipeOfTheDay_bloggers'>
                    <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-user"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>Alfa Keu</span> 
                   <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-calendar-alt"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>03/04/2022</span>
                   <p>Delicious pizza with cheese stuffed crust</p>
                  
                   <a href='/' className='RecipeOfTheDay_bloggers_Btn'>Read More</a>
                    </div>
                  
                </div>
                </div>
                </a>
                <a href='/'>
                <div className='RecipeOfTheDay_fourRow'>
                    <img src='https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80'/>
                    <div className='RecipeOfTheDay_fourRow_blog_title'>
                    <span className='RecipeOfTheDay_fourRow_border'>
                        Spaghetti with sauce
                    </span>
                    <div className='short-seperator'></div>
                    <div className='RecipeOfTheDay_bloggers'>
                    <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-user"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>Alfa Keu</span> 
                   <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-calendar-alt"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>03/04/2022</span>
                   <p>Spaghetti al dente with red sauce on white ceramic round plate </p>
                  
                   <a href='/' className='RecipeOfTheDay_bloggers_Btn'>Read More</a>
                    </div>
                  
                </div>
                </div>
                </a>
                <a href='/'>
                <div className='RecipeOfTheDay_fourRow'>
                    <img src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'/>
                    <div className='RecipeOfTheDay_fourRow_blog_title'>
                    <span className='RecipeOfTheDay_fourRow_border'>
                        Barbecue Ribs
                    </span>
                    <div className='short-seperator'></div>
                    <div className='RecipeOfTheDay_bloggers'>
                    <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-user"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>Alfa Keu</span> 
                   <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-calendar-alt"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>03/04/2022</span>
                   <p>Ribs with barbecue sauce, fries, pickes and stuffed mushrooms </p>
                  
                   <a href='/' className='RecipeOfTheDay_bloggers_Btn'>Read More</a>
                    </div>
                  
                </div>
                </div>
                </a>
                <a href='/'>
                <div className='RecipeOfTheDay_fourRow'>
                    <img src='https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'/>
                    <div className='RecipeOfTheDay_fourRow_blog_title'>
                    <span className='RecipeOfTheDay_fourRow_border'>
                        Buritto
                    </span>
                    <div className='short-seperator'></div>
                    <div className='RecipeOfTheDay_bloggers'>
                    <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-user"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>Alfa Keu</span> 
                   <span className='RecipeOfTheDay_bloggers_user'><i className="fas fa-calendar-alt"/></span>
                   <span className='RecipeOfTheDay_bloggers_text'>03/04/2022</span>
                   <p>Flour tortilla that is rolled or folded around a filling such as meat, beans, and cheese</p>
                  
                   <a href='/' className='RecipeOfTheDay_bloggers_Btn'>Read More</a>
                    </div>
                  
                </div>
                </div>
                </a>
               
            </div>
        </div>
    )
}