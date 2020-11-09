import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { GiOrange } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';

//images
import logo from '../../images/logo.png';
import hero from '../../images/dashboard-hero.png';

//home, profile, diary(list, food), progress, settings
const Dashboard = () => {

     //color pallette
     const lightblue = '#E1F2F9';
     const skyblue = '#97D4E7'
     const blue = '#2F98BA';
     const darkblue = '#081E36';
     const white = '#FFFFFF';
     const gray = 'gray';

     //hover link effects
     function hover() {

     }

    return (
        
        <div style={{display: 'flex', margin: '10px 0 0 10px'}} className="App">
            <div style={{width: '90px', height: '100vh', paddingTop: '50px', borderRadius: '15px', backgroundColor: skyblue}}>
                <div style={{padding: '10px 0'}}>
                    <img src={logo} alt="logo" style={{width: '50px'}}/>
                </div>
                <div style={{padding: '10px 0'}}>
                    <AiFillHome style={{color: white, width: '2rem'}} size/>
                    <p>Home</p>
                </div>
                <div style={{padding: '10px 0'}}>
                    <MdAccountCircle style={{color: white, width: '2rem'}} size/>
                    <p>Account</p>
                </div>
                <div style={{padding: '10px 0'}}>
                    <GiOrange style={{color: white, width: '2rem'}} size/>
                    <p>Diary</p>
                </div>
                <div style={{padding: '10px 0'}}>
                    <GoGraph style={{color: white, width: '2rem'}} size/>
                    <p>Progress</p>
                </div>

                <div style={{padding: '10px 0'}}>
                    <IoMdSettings style={{color: white, width: '2rem'}} size/>
                    <p>Settings</p>
                </div>
                
            </div>

            <div className="welcome" style={{backgroundColor: skyblue, margin: '0 10px  0 10px', borderRadius: '15px', height: '20vh', width: '100vw'}}>
                <h2>Welcome, Alanna</h2>
                <p>You have 1,500 calories left to track.</p>
                <button>Track Meals</button>
            </div>

            <div className="food-list">

            </div>
        </div>
    )
}

export default Dashboard;