import React from 'react';
import './stylesheets/App.css';
import { Switch, Route, Link } from "react-router-dom";

//components
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/UserAccount/Dashboard';
import Database from './components/UserAccount/Database';

//images
import logo from './images/logo.png'

function App() {

  //color pallette
  const lightblue = '#E1F2F9';
  const blue = '#2F98BA';
  const darkblue = '#081E36';
  const white = '#FFFFFF';
  const orange = '#F77741';
  const gray = 'gray';

  const button = {
    padding: '10px 20px',
    backgroundColor: blue,
    color: white,
    borderRadius: '6px',
    border: 'none',
    marginLeft: '1rem'
}
  return (
    <div className="App">
      <nav style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#E1F2F9', padding: '1rem 4rem', }}>
        <div>
          <Link to='/'><img src={logo} alt='logo' style={{width: '125px'}}/></Link>
        </div>
        <div style={{display: 'flex'}}>
          <Link to='/' style={{textDecoration: 'none', padding: '0 1rem', color: `${darkblue}`, }}>Home</Link>
          <Link to='/my-account' style={{textDecoration: 'none', padding: '0 1rem', color: `${darkblue}`, }}>Dashboard</Link>
          <Link to='/about' style={{textDecoration: 'none', padding: '0 1rem', color: `${darkblue}`, }}>About</Link>
          <Link to='/contact' style={{textDecoration: 'none', padding: '0 1rem', color: `${darkblue}`, }}>Contact</Link>
          <Link to='/sign-in'><button style={button}>Sign In</button></Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/my-account" component={Dashboard}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/search" component={Database}/>
      </Switch>
    </div>
  );
}

export default App;
