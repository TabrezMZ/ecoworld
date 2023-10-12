export const Hero = ({imgSrc}) => {
    return(
        <section
        data-aos="zoom-in"
        className="home"
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
        id="home"
      >
        <div className="content" data-aos="fade-down"></div>
      </section>
    )
}