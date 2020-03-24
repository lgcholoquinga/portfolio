import React, { Component } from 'react';
import '../styles/Skill.css';
import react from '../assets/static/react.png';
import angular from '../assets/static/angular.png';

class Skill extends Component {
  render() {
    console.log('Hola Mundo');
    return (
      <div className='container'>
        <h2 className='skillTitle'>Skills</h2>
        <div className='row skillContainer'>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='skillC'>
              <div className='skillM'>
                <div className='skill-image'>
                  <img src={react} alt='skill' />
                </div>
                <div className='skill-title'>
                  <h2>HTML</h2>
                </div>
                <div className='skill-porcent'>
                  <p>
                    80%
                    <br />
                    Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='skillC'>
              <div className='skillM'>
                <div className='skill-image'>
                  <img src={react} alt='skill' />
                </div>
                <div className='skill-title'>
                  <h2>HTML</h2>
                </div>
                <div className='skill-porcent'>
                  <p>
                    80%
                    <br />
                    Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='skillC'>
              <div className='skillM'>
                <div className='skill-image'>
                  <img src={react} alt='skill' />
                </div>
                <div className='skill-title'>
                  <h2>HTML</h2>
                </div>
                <div className='skill-porcent'>
                  <p>
                    80%
                    <br />
                    Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-3 col-sm-6'>
            <div className='skillC'>
              <div className='skillM'>
                <div className='skill-image'>
                  <img src={angular} alt='skill' />
                </div>
                <div className='skill-title'>
                  <h2>HTML</h2>
                </div>
                <div className='skill-porcent'>
                  <p>
                    80%
                    <br />
                    Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Skill;
