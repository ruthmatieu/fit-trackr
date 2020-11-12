import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings, IoMdAddCircle } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { GiOrange } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { Link } from "react-router-dom";
//images
import logo from '../../images/logo.png';
import hero from '../../images/dashboard-hero.png';
import defautlImage from '../../images/default-profile-image.png'

//components
import Database from '../UserAccount/Database';
import Diary from '../UserAccount/Diary';

//home, profile, diary(list, food), progress, settings
const Dashboard = () => {

     //color pallette
     const lightblue = '#E1F2F9';
     const skyblue = '#97D4E7'
     const blue = '#2F98BA';
     const darkblue = '#081E36';
     const white = '#FFFFFF';
     const lightgray = '#FCFBFF';
     const gray = 'gray';
     const orange = '#F77741';
     const offwhite = '#FCFAFE';

     const heading = {
        color: darkblue, 
     }

     const paragraph = {
        color: gray, 
        lineHeight: '1.6rem'
     }

     //hover link effects
     function hover() {

     }

    return (
        <div className="App" style={{display: 'flex', padding: '10px 0 0 10px', backgroundColor: lightgray}}>

            <div style={{width: '80%'}}>
                <div className="status" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p style={heading}>Monday, October 9</p>
                    </div>
                    <div className="search">
                        <form onSubmit={Database}>
                            <input
                                type='text'
                                name='search'
                                placeholder='search'
                            />
                            <button>Search</button>
                        </form>
                        
                    </div>    
                </div>
                <div style={{display: 'flex'}}>
                    
                    <div style={{width: '90px', height: '100vh', paddingTop: '50px', borderRadius: '15px', backgroundColor: skyblue}}>
                        {/* <div style={{padding: '10px 0'}}>
                            <img src={logo} alt="logo" style={{width: '50px'}}/>
                        </div> */}
                        <div style={{padding: '10px 0'}}>
                        <Link to='/dashboard'><AiFillHome style={{color: darkblue, width: '2rem'}} size/></Link>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <MdAccountCircle style={{color: darkblue, width: '2rem'}} size/>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <Link to='/search'><GiOrange style={{color: darkblue, width: '2rem'}} size/></Link>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <GoGraph style={{color: darkblue, width: '2rem'}} size/>
                        </div>

                        <div style={{padding: '10px 0'}}>
                            <IoMdSettings style={{color: darkblue, width: '2rem'}} size/>
                        </div>
                        
                    </div>


                    <div>
                        <div className="welcome" style={{display: 'flex', backgroundColor: skyblue, marginLeft: '10px', borderRadius: '15px', height: '200px', width: '1068px'}}>
                            <div style={{width: '45%', display: 'grid', placeItems: 'center'}}>
                                <div>
                                    <h2>Good afternoon, Alanna</h2>
                                    <p>You have <span style={{color: orange}}>1,500</span> calories left to track.</p>
                                </div> 
                            </div>
                            <div style={{width: '10%', display: 'grid', placeItems: 'center'}}>
                                <div>
                                    <IoMdAddCircle style={{color: darkblue, width: '3rem'}} size/>
                                    {/* <p>Add Meal</p> */}
                                </div>
                                
                            </div>
                            <div style={{width: '45%'}}>
                                <img src={hero} alt='' style={{width: '450px', fontWeight: '900', position: 'relative', top: '-50px'}}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', backgroundColor: white, marginLeft: '10px', marginTop: '10px', borderRadius: '15px', height: '80vh', width: '1068px'}}>
                            <div style={{textAlign: 'left', padding: '0 50px'}}>
                                {/* <div className="tg-wrap">
                                    <table className="tg" style={{display: 'flex'}}>
                                        <thead>
                                            <tr>
                                                <th className="tg-ul38">Pizza bites</th>
                                            </tr>
                                        </thead>
                                        <thead>Calories (kcal)
                                            <tr>
                                                <th className="tg-ul38">123</th>
                                            </tr>
                                        </thead>
                                        <thead>Carbs (g)
                                            <tr>
                                                <th className="tg-ul38">123</th>
                                            </tr>
                                        </thead>
                                        <thead>Protein(g)
                                            <tr>
                                                <th className="tg-ul38">123</th>
                                            </tr>
                                        </thead>
                                        <thead>Fat(g)
                                            <tr>
                                                <th className="tg-ul38">123</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div> */}
                                <div>
                                    <div style={{display: 'flex', justifyContent:'space-around', backgroundColor:''}}>
                                        <h3 style={{color: darkblue}}>Breakfast</h3>
                                        <h5 style={{padding: '0 10px'}}>Calories (kcal)</h5>
                                        <h5>Carbs (g)</h5>
                                        <h5>Protein (g)</h5>
                                        <h5>Fats (g)</h5>
                                    </div>
                                    <div style={{padding: '0 0 0 50px'}}>
                                        <p>5 bacon strips</p>
                                        <p>Eggs (over easy)</p>
                                        <p>Orange juice</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{color: darkblue}}>Snack</h3>
                                    <div style={{padding: '0 0 0 50px'}}>
                                        <p>Pizza bites</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{color: darkblue}}>Lunch</h3>
                                    <div style={{padding: '0 0 0 50px'}}>
                                        <p>Turkey sandwhich</p>
                                        <p>Nature Valley granola bar</p>
                                        <p>Small garden salad</p>
                                        <p>Gatorade</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{color: darkblue}}>Snack</h3>
                                    <div style={{padding: '0 0 0 50px'}}>
                                        <p>Sunships Original</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>Dinner</h5>
                                    <div style={{padding: '0 0 0 50px'}}>
                                        <p>3oz steak</p>
                                        <p>Asparagus</p>
                                        <p>loaded potatoes</p>
                                        <p>Cranberry juice</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Database/> */}
                    </div>
                    
                </div>
            </div>

            <div style={{width: '20%', height: '100vh', paddingTop: '50px', marginLeft: '10px', borderRadius: '15px 0 0 15px', backgroundColor: blue}}>
                <img src={defautlImage} alt="profile image" style={{width: '130px', borderRadius: '50%', border: '5px solid orange'}}/>
                <h4>Alanna Civil</h4>
                <h6>@alannacivil</h6>
                <p>Height: 5' 1"</p>
                <p>Weight: 125lbs</p>
            </div>
        </div>
    )
}

export default Dashboard;