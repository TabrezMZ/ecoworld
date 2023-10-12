import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { BackTopic } from "../components/BackButton";
import { CircleHero } from "../components/CircleHero";
import { Hero } from "../components/Hero";
export const Connectivity = () => {
  return (
    <>
      <NavBar />
      
     <Hero imgSrc={'https://via.placeholder.com/500'}/>
      <CircleHero />
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>Seamless</span> Connectivity
        </h1>

        <div className="row">
          <div
            className="image"
            data-aos="fade-down"
            style={{ padding: "10px", border: "1px solid" }}
            data-aos-delay="300"
          >
            <img src="https://via.placeholder.com/500" alt="" />
          </div>
          <div
            class="content"
            data-aos="fade-up"
            style={{ marginLeft: "40px" }}
            data-aos-delay="150"
          >
            <ol class="custom-list" data-aos="fade-up">
              <li>
                <div>
                  <h2>Title 1</h2>
                  <p>Description for item 1 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 2</h2>
                  <p>Description for item 2 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 3</h2>
                  <p>Description for item 3 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 4</h2>
                  <p>Description for item 4 goes here.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>Seamless</span> Connectivity
        </h1>

        <div className="row">
          <div
            class="content"
            data-aos="fade-up"
            style={{ marginLeft: "40px" }}
            data-aos-delay="150"
          >
            <ol class="custom-list" data-aos="fade-up">
              <li>
                <div>
                  <h2>Title 1</h2>
                  <p>Description for item 1 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 2</h2>
                  <p>Description for item 2 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 3</h2>
                  <p>Description for item 3 goes here.</p>
                </div>
              </li>
              <li>
                <div>
                  <h2>Title 4</h2>
                  <p>Description for item 4 goes here.</p>
                </div>
              </li>
            </ol>
          </div>
          <div
            className="image"
            data-aos="fade-down"
            style={{ padding: "10px", border: "1px solid" }}
            data-aos-delay="300"
          >
            <img src="https://via.placeholder.com/500" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
