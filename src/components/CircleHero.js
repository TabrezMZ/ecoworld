import { BackTopic } from "./BackButton"

export const CircleHero = () => {
    return(
        <section data-aos="flip-left" className="circle-section">
        <BackTopic/>
        <div className="circle2-container">
          <div className="circle2-text left">
              <h2>Left Heading</h2>
              <p>Description for left side</p>
          </div>
          <img className="circle2-image" src="https://via.placeholder.com/500" alt="Circle2 Image"/>
          <div className="circle2-text right">
              <h2>Right Heading</h2>
              <p>Description for right side</p>
          </div>
          <p
              className="hero__scroll"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="800"
            >
              Scroll down <br />
              <i className="chevron bottom"></i>
              <i className="chevron bottom"></i>
            </p>
      </div>
      
        </section>
    )
}