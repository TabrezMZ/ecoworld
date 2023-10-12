export const LeftBox = ({ title, description, imgSrc }) => {
  return (
    <section data-aos="zoom-out-up" class="about" id="about">
      <h1 class="heading">
        {" "}
        <span>{title}</span>
      </h1>

      <div class="row" style={{ border: "1px solid", padding: "10px" }}>
        <div class="content" data-aos="fade-up" data-aos-delay="150">
          <h3>team of passionate people</h3>
          <p>{description}</p>
          <p>{description}</p>
        </div>
        <div class="image" data-aos="fade-down" data-aos-delay="300">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </section>
  );
};
