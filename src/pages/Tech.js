import { CircleHero } from "../components/CircleHero";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { LeftBox } from "../components/LeftBox";
import { NavBar } from "../components/NavBar";
import { RightBox } from "../components/RightBox";

export const Tech = () => {
  return (
    <>
      <NavBar />
      <Hero imgSrc={'https://via.placeholder.com/500'}/>
      <CircleHero/>

      <RightBox
        title="command center"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      <LeftBox
        title="24/7 Helpdesk"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />
      <RightBox
        title="Conseireg Services"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      <LeftBox
        title="Security"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      <RightBox
        title="Parking Solution"
        imgSrc="https://via.placeholder.com/500"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              adipisci totam, nam voluptates quis delectus. Ea quo repudiandae."
      />

      <Footer />
    </>
  );
};
