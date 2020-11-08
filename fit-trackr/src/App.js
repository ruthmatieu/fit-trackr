import React from 'react';
import './stylesheets/App.css';

//components
import Hero from './components/HeroSection';
import Landing from './components/Landing';
import Dashboard from './components/UserAccount/Dashboard';

function App() {
  return (
    <div className="App">
      <nav style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#E1F2F9', padding: '2rem 4rem'}}>
        <div>
          FitTrackr Logo
        </div>
        <div style={{display: 'flex'}}>
          <li style={{listStyle: 'none', padding: '0 1rem'}}>Home</li>
          <li style={{listStyle: 'none', padding: '0 1rem'}}>Dashboard</li>
          <li style={{listStyle: 'none', padding: '0 1rem'}}>About</li>
          <li style={{listStyle: 'none', padding: '0 1rem'}}>Contact</li>
          <button style={{marginLeft: '1rem'}}>Sign In</button>
        </div>
      </nav>
      <Hero/>
      <Landing/>

      {/* make sure to remove these components */}
      <Dashboard/>
    </div>
  );
}

export default App;
