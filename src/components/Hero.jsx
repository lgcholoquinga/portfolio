import React from 'react';
import Icon from './Icon';
import logoLuis from '../assets/static/LuisCholoquinga.png';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className='container'>
        <div className='row'>
          <div className='col hero-details'>
            <div className='hero-text'>
              <h1 className='hero-greeting'>Hi,</h1>
              <h1 className='hero-name'>
                I am
                <span> Luis Choloquinga</span>
                ,
                <br />
                Software Developer.
                <br />
              </h1>
              <p className='hero-skill'>Reac JS / JavaScript / .Net / Java / Laravel / CSS</p>
              <div className='hero-contact'>
                <a href='https://www.facebook.com/luis.cocha.549' target='_blank' rel='noopener noreferrer'>
                  <i>
                    <Icon size='2.2rem' icon='facebook' />
                  </i>
                </a>
                <a href='https://www.linkedin.com/in/luis-choloquinga-389134192/' target='_blank' rel='noopener noreferrer'>
                  <i>
                    <Icon size='2.2rem' icon='linkedin' />
                  </i>
                </a>
                <a href='https://github.com/lgcholoquinga' target='_blank' rel='noopener noreferrer'>
                  <i>
                    <Icon size='2.2rem' icon='github' />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className='col hero-image'>
            <div className='hero-avatar'>
              <img className='herochild' src={logoLuis} alt='Hero' />
            </div>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Hero;