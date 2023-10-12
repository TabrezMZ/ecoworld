import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        
  <section className="footer">

  <div className="box-container">

    <div className="box" data-aos="fade-up">
      <h3> <i className="fas fa-user"></i> ECOWORLD </h3>
      <p>We are a team of experienced ECOWORLD dedicated to creating unforgettable Meeting for our clients.</p>
    </div>

    <div className="box" data-aos="fade-up">
      <h3>Our Services</h3>
        <Link data-aos="zoom-in-left" to='/tech'>
        <i class="fas fa-chevron-right"></i>  Tech
        </Link>
        <Link data-aos="zoom-in-left" to='/work'>
        <i class="fas fa-chevron-right"></i>  WorkSpace
        </Link>
        <Link data-aos="zoom-in-left" to='/connectivity'>
        <i class="fas fa-chevron-right"></i> connectivity
        </Link>
        <Link data-aos="zoom-in-left" to='/testimonial' >
        <i class="fas fa-chevron-right"></i>testimonial
        </Link>
        <Link data-aos="zoom-in-left"  to='/spaces' >
        <i class="fas fa-chevron-right"></i> space
        </Link>
    </div>

    <div className="box" data-aos="fade-up">
      <h3>Contact Us</h3>
      <Link ><i className="fas fa-phone"></i> 123-595-5555</Link>
      <Link ><i className="fas fa-phone"></i> 555-555-5555</Link>
      <Link ><i className="fas fa-envelope"></i> info@weddingplanner.com</Link>
      <Link ><i className="fas fa-map"></i> 123 Main St, Anytown USA</Link>
    </div>

    <div className="box" data-aos="fade-up">
      <h3>Follow Us</h3>
      <Link > <i className="fab fa-facebook-f"></i> facebook </Link>
      <Link > <i className="fab fa-twitter"></i> twitter </Link>
      <Link > <i className="fab fa-instagram"></i> instagram </Link>
      <Link > <i className="fab fa-pinterest"></i> pinterest </Link>
    </div>
  </div>

  <div className="credit"> &copy; copyright @ 2023 by <span>ECOWORLD</span> </div>

</section>
    )
}