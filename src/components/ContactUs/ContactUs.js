import "./ContactUs.css"
import Desert from  "../HotRecipe/HotRecipe"
import { useState } from "react"

function AboutUs () {
  const[user, setUser]=useState({
    name: "",
    email: "",
    phonenumber: "",

  })
// 

const ChangeUser=(e)=>{
    e.preventDefault()
    setUser({[e.target.name]: e.target.value})
    console.log(e.target.value)
   
//         setUser(e.target.value)

// setEmail(e.target.value)

}

    return <>
<div className="container">
<div className="container-contact">
    
    <div className="contact-thank">
        <p>Thanks for visiting! We hope that you have found what you needed on our
             website. 
            If not, please feel free to contact us using any of the methods below.</p>
    </div>


    <div className="contact-form">
    <form action="/action_page.php">
    
    <input type="text" name=" name" value={user.name} placeholder="First Name"  onChange={e => setUser(e.target.value)}/>

    <input type="email" name="email" value={user.email}   placeholder="Enter Email" onChange={e => setUser(e.target.value)} />

    <input type="number"  name="Phone"  value={user.phonenumber}  placeholder="Phone"  onChange={e => setUser(e.target.value)}  />

    
    
    <textarea  ></textarea>

    <input type="submit" value="Submit"/>
  </form>
    </div>
</div>

</div>
    </>
}

export default AboutUs
