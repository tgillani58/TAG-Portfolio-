// import React from 'react';
// import {Link} from 'react-router-dom';
// const Footer = () => {
//   return (
//     <footer className="bg-lightgrey  text-center text-lg-start ">
//       <div className="container p-4">
//         <div className="row">
//           <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
//             <h5 className="text-uppercase">Footer Content</h5>
//             <p>
//               Here you can use rows and columns to organize your footer content.
//             </p>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//             <h5 className="text-uppercase">Links</h5>
//             <ul className="list-unstyled mb-0">
//               <li><a href="#!" className="text-dark">Link 1</a></li>
//               <li><a href="#!" className="text-dark">Link 2</a></li>
//               <li><a href="#!" className="text-dark">Link 3</a></li>
//               <li><a href="#!" className="text-dark">Link 4</a></li>
//             </ul>
//           </div>
//           <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//             <h5 className="text-uppercase mb-0">Social Links</h5>
//             <ul style={{color:'white'}} className="list-unstyled">
//               <li><Link to="https://www.linkedin.com/in/talha-g-bb3590132" target='blank' className="text-dark">Linkedin</Link></li>
//               <li><Link to="https://github.com/tgillani58" target='blank' className="text-dark">Github</Link></li>
//               <li><Link to="#!" className="text-dark">Link 3</Link></li>
//               <li><Link to="#!" className="text-dark">Link 4</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="text-center p-3 bg-dark text-white">
//         © 2024 Copyright:
//         <Link className="text-white" to="https://yourwebsite.com/"> TAGportfolio.com</Link>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// -----------------------------------------------------------------------------------------------------------------




import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="bg-dark text-black pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 text-black fw-bold">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-black fw-bold">Home</Link></li>
              <li><Link to="/about" className="text-black fw-bold">About</Link></li>
              <li><Link to="/contact" className="text-black fw-bold">Any Query?</Link></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 text-black fw-bold">
            <h5>Follow on</h5>
            <div>
              <Link to="https://www.linkedin.com/in/talha-g-bb3590132" target='_blank' className="text-primary me-3">
              <FontAwesomeIcon icon={faLinkedin}  size="2x" />
              </Link>
              <Link to="https://github.com/tgillani58" target='_blank' className="text-white me-3">
              <FontAwesomeIcon icon={faGithub}  size="2x" />
              </Link>
              <Link to="https://web.facebook.com/profile.php?id=100009222050150&_rdc=1&_rdr" target='_blank' className="text-primary me-3">
              <FontAwesomeIcon icon={faFacebookF}  size="2x" />
              </Link>
              <Link to="https://www.instagram.com/talhagillani_tg" target='_blank' className="text-danger">
              <FontAwesomeIcon icon={faInstagram}  size="2x" />
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-4 text-center text-black">
            <h5>Personal Portfolio Site</h5>
            <p className="mb-0 fw-bold">Empowering Your Digital Life</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-black fw-bold">&copy; 2024 TAG Portfolio Site...</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
