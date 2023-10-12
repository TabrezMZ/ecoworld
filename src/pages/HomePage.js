import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <section className="home" id="home">
        <div  className="content" data-aos="fade-down">
          <h3>
          Experience ECOWORLD <br /> a place called inspiration
          </h3>
          <div className="content">
        <div className="background-image"></div>
        <div data-aos="zoom-in-up" className="circles">
          <div onClick={()=> navigate('/connectivity')} className="circle">
            <div
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
              }}
              className="circle-image"
            ></div>
            <div className="circle-info">
              <h2>connectivity</h2>
              <p>Description 1</p>
            </div>
          </div>
          <div onClick={()=> navigate('/tech')} className="circle">
            <div
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
              }}
              className="circle-image"
            ></div>
            <div className="circle-info">
              <h2>tech</h2>
              <p>Description 2</p>
            </div>
          </div>
          <div onClick={()=> navigate('/spaces')} className="circle">
            <div
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
              }}
              className="circle-image"
            ></div>
            <div className="circle-info">
              <h2> spaces</h2>
              <p>Description 3</p>
            </div>
          </div>
          <div onClick={()=> navigate('/work')} className="circle">
            <div
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
              }}
              className="circle-image"
            ></div>
            <div className="circle-info">
              <h2>Work</h2>
              <p>Description 5</p>
            </div>
          </div>
          <div onClick={()=> navigate('/testimonial')} className="circle">
            <div
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
              }}
              className="circle-image"
            ></div>
            <div className="circle-info">
              <h2>Testimonial</h2>
              <p>Description 4</p>
            </div>
          </div>
          
        </div>
      </div>
        </div>
      </section>
    </>
  );
};
