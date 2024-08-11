import React from 'react';

const About = () => {
  return (
    <div>
    <section>
    <div style={{marginBottom:'-100px'}} className="container text-white w-50 ">
      <h1 style={{animationName:'textabout', WebkitTextStrokewidth:'5px', WebkitTextFillColor:'black' ,WebkitTextStrokeColor:'grey', marginTop:'50px'}} >About</h1>
      <p>Dedicated and result-oriented professional seeking a challenging position in the field of IT where I can leverage my skills in Frontend
Development and IT support. Eager to Contribute to a dynamic team environment, drive innovation and make meaningful contributions
to organizational success.</p><hr style={{color:'grey'}}></hr>
<br></br>
<br></br>
</div>
</section>






<section className="experience-section bg-black py-5">
      <div style={{marginBottom:'30px'}} className="container">
        <h2 style={{animationName:'textabout', WebkitTextStrokewidth:'5px', WebkitTextFillColor:'grey' ,WebkitTextStrokeColor:''}}  className="text-center mb-4 text-white">Education & Skills</h2>
        <div style={{marginLeft:'300px'}} className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body bg-secondary text-black">
                <h5 className="card-title fw-bold">Education</h5>
                <p className="card-text fw-bold">BS Computer Science</p>
                <h6>University:</h6>
                
                  <p>Comsats Lahore</p>
                  <p>CGPA: 2.79</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-90">
              <div className="card-body bg-secondary text-black">
                <h5 className="card-title fw-bold">Skills</h5>
                <p className="card-text fw-bold">My Expertise are in...</p>
        
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>BootStrap</li>
                  <li>ReactJs</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 mb-4">
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
          </div> */}
      </div>
      </div>
      
</section>
</div>


  );
};

export default About




{/* <div style={{color:'grey'}} >
<h4 >My Expertise are ...</h4>
<ul className='mt-5 text-white'>
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
    </div> */}
