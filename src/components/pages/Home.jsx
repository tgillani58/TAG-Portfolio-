import React from 'react';
import './Home.css';
import talhaimg from '../pages/talhaimg.jpg';
const Home = () => {

  // Contact form----------

  // const Contact = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log('Form Data:', formData);
  //   };

    // contact end----------------------------------------------------


  return (
    <>
    <div class="container d-flex" >
      <div className='container'>
      <div style={{marginTop:'200px'}} class = "text-center text-white ">
      <h1 style={{animationName:'textanimation', WebkitTextStrokewidth:'5px', WebkitTextFillColor:'black' ,WebkitTextStrokeColor:'grey', fontSize:'50px'}} >Hi I'm Talha Gillani</h1>
      <p style={{fontSize:'1.2rem', color:'grey', }} >Im a Frontend Developer |</p>
    </div>

      </div>
     


      <div className='container'>
      <div class = " ">
        <img style={{marginTop:'120px', height:'250px', width:'250px', borderRadius:'50%', marginLeft:'120px', animationName:'talhaimg'}} className='img-fluid ' src={talhaimg} alt="img error"/>
      
    </div>

      </div>
    </div>



{/* // About Starts here--------------------------------------------------------------------------------------- */}


<section>
    <div className="container text-white w-50 ">
      <h1 style={{marginTop:'200px' ,animationName:'textabout', WebkitTextStrokewidth:'5px', WebkitTextFillColor:'black' ,WebkitTextStrokeColor:'grey'}} className='hh1' >About</h1>
      <p style={{color:'grey'}}>Dedicated and result-oriented professional seeking a challenging position in the field of IT where I can leverage my skills in Frontend
Development and IT support. Eager to Contribute to a dynamic team environment, drive innovation and make meaningful contributions
to organizational success.</p><hr style={{color:'grey'}}></hr>
<br></br>
<br></br>


<div >
<h4 style={{WebkitTextStrokewidth:'5px', WebkitTextFillColor:'grey' ,WebkitTextStrokeColor:'white'}} className='hh4'>My Expertise are...</h4>
<ul className='list mt-5 text-secondary'>
  <li>
 HTML5
  </li>
  <li>
 CSS3 
  </li>
  <li>
JavaScript 
  </li>
  <li>
BootStrap 
  </li>
  <li style={{marginBottom:'150px'}}>
 ReactJs
  </li>
  
  </ul>
  </div>
    </div>
    </section>

{/* // About Ends here--------------------------------------------------------------------------------------- */}

{/* Experiance Starts here------------------------------------------------------------------------------------- */}

<section className="experience-section bg-black py-5">
      <div className="container">
        <h2  className="text-center mb-4 text-white mt-5">Experiance</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body bg-secondary text-white">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of the project.</p>
                <h6>Skills:</h6>
                <ul>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body bg-secondary text-white">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of the project.</p>
                <h6>Skills:</h6>
                <ul>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body bg-secondary text-white">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of the project.</p>
                <h6>Skills:</h6>
                <ul>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li >Skill 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:'150px'}}>

      </div>
    </section>

     {/* Experiance Ends here--------------------------------------------------------------------------------------- */}


     {/* Contact form starts here----------------------------------------------------------------------------------------- */}


     {/* <section>
    <div style={{marginTop:'100px', width:'500px'}} className="container">
      <div className='form text-white'>
      <h2 >Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button style={{marginBottom:'100px'}} type="submit" className="btn btn-secondary ">Submit</button>
      </form>
      </div>
    </div>
    </section> */}

</>
  );
}



export default Home
