import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "./Homepage.css"

export default function Homepage() {
    return (
        <>
        <Navbar/>
        <div className = "upperPart">
            <h1>Hello!</h1>
            <h2>I am Erifyli , Front-end Developer and sea lover based in Barcelona.</h2>
            <div className = "buttonBox">
            <Link to="/projects"><button type="button" class="btn btn-danger">Check my projects</button></Link>
            </div>
            </div>
        <div className = "whoAmI">
        <div class="item">
        <div class="polaroid">
        <section>
            <img src="https://i.ibb.co/sP8pzkq/IMG-20191110-204435.jpg" alt="profilePicture"></img>
            </section>
             </div>
             </div>
            <div className="profileText">
                <p>¡Hola!</p>
                <p>I am Erifyli, a super energetic Front-end developer! I am born and raised in Athens but for the last two years, I am based in Barcelona!</p>
               Before deciding to pull a U-turn in my career, I was working in the Logistics Sector and more in concrete in the maritime transportation.
                <p> I enjoy a lot working in teams and getting to know different working styles. <br></br> Technologies: Javascript | ES6 | HTML5 | CSS3 | MongoDB | Bootstrap | React | Node.js | Express 👩🏻‍💻 </p>
                <p>Thank you for visiting my webpage! </p>
                <p>Erifyli</p>

            </div>
        </div>
       
        </>
    )
}



/* me gusta este color #5dbcd2 y este #0e8ac0 */