import { CircleHero } from "../components/CircleHero";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { LeftBox } from "../components/LeftBox";
import { NavBar } from "../components/NavBar";
import { RightBox } from "../components/RightBox";
import { Service } from "../components/Service";

export const Spaces = () => [
    <>
    <NavBar/>
    <Hero imgSrc={'https://via.placeholder.com/500'}/>
 
 <div style={{height : '100vh'}}>
 <CircleHero/>
 </div>
    
   
       
<section style={{
              backgroundImage: `url("https://via.placeholder.com/500")`
            }} class="home" id="home">

{/* <div class="content" data-aos="fade-down">
    <h3>AIRE Club </h3>
</div> */}
</section>
<RightBox
        title="command center"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      <Service/>

      <LeftBox
        title="24/7 Helpdesk"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />
      <Service/>
      <RightBox
        title="Conseireg Services"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      

     
    <Footer/>
  </>
]