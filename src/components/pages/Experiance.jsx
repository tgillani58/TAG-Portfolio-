import React from 'react';
import './Experiance.css';

const Experiance = () => {
  return (
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

  
  );
};

export default Experiance;
