import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import checkAuth from "./auth/checkAuth";
import aboutimage from "./backgro.avif"
function Ogpage() {
  const appStyles = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    background: `url(${aboutimage}) `,
    backgroundSize: 'cover', // Use 'cover' to make the image cover the entire body
    backgroundAttachment: 'fixed', // Optional, to fix the background image
    height: '100vh',
   
    // Set the height to fill the screen
  };
  return (
    <div style={appStyles}>
      <Navbar />
      <div className="row ">
        <div className="col-md-6 mt-5 ">
          <h3><b>About Us</b></h3>
          <br/>
          <h5>
            Welcome to Medico, your trusted source for all your healthcare
            needs. We are more than just a medical store; we are your health
            and wellness partner.
          </h5>

          <h3><b>Mission</b></h3>
        
          <h5>
            At Medico, our mission is simple yet profound: to provide you with
            the highest quality pharmaceuticals, medical supplies, and
            healthcare products while delivering exceptional service and expert
            advice. We aim to improve your well-being and simplify your
            healthcare journey.
          </h5>

          <h3><b>Who We Are</b></h3>
          <h5>
            Medico is a team of dedicated professionals who are passionate
            about your health. Our experienced pharmacists, knowledgeable staff,
            and healthcare experts are committed to serving you with care,
            compassion, and integrity.
          </h5>

            
         

          <Link to="user" className="btn btn-info">
            go to medicine list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ogpage;
