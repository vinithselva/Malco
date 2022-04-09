import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>We are a Fast Growing FMCG Company striving for growth </h1>
      <p>We are looking for talent to join us check our Partner with Us page</p>
      <div className='hero-btns'>
        
      </div>
    </div>
  );
}

export default HeroSection;
