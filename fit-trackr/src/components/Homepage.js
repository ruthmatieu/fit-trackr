import React from 'react';
import '../stylesheets/App.css';

//components
import Hero from './HeroSection';
import Landing from './Landing';


function Homepage() {

  return (
    <div className="App">
      <Hero/>
      <Landing/>
    </div>
  );
}

export default Homepage;