import { CircleHero } from "../components/CircleHero"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { TestM } from "../components/Testim"

export const Work = () => {
    return(
        <>
      <NavBar/>
      <Hero imgSrc={'https://via.placeholder.com/500'}/>
      <div style={{height : '100vh'}}>
      <CircleHero/>
      </div>
  

  <TestM/>
  <div style={{backgroundColor : '#324031'}}>
  <TestM/>
  </div>
  <TestM/>
     
    
     


      
      <Footer/>
    </>
    )
}