import { BackTopic } from "../components/BackButton"
import { CircleHero } from "../components/CircleHero"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"

export const Testimonial = () => {
      return(
       <>
       <NavBar/>
       <Hero imgSrc={'https://via.placeholder.com/500'}/>
      <CircleHero/>
      

      <section className="team" id="team">

<h1 className="heading">our Testimonial</h1>

<div className="box-container" data-aos="fade-up">

   <div className="box">
      <img src="https://via.placeholder.com/500" alt=""/>
      <h3>john deo</h3>
      <p>good , awesome , nice</p>
     
   </div>

   <div className="box">
      <img src="https://via.placeholder.com/500" alt=""/>
      <h3>john deo</h3>
      <p>good , awesome , nice</p>
      
   </div>

  

</div>

</section>
<Footer/>
       </>
      )
}