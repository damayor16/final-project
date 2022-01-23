import "./Homepage.css"
import { Slide } from 'react-slideshow-image';
import HotRecipe from "../HotRecipe/HotRecipe"
import RecipeOfTheDay from "../RecipeOfTheDay/RecipeOfTheDay";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ];

  const Homepage = () => {   
    return (
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Hamburger</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Nut and fruit Salad</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Cheesecake</span>
            </div>
          </div>
        </Slide>
        <HotRecipe/>        
        <RecipeOfTheDay/>
      </div>
      
    )
};

export default Homepage