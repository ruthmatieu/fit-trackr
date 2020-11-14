import React from 'react';
import { FaEdit } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings, IoMdAddCircle } from 'react-icons/io';
import { MdAccountCircle, MdDelete } from 'react-icons/md';
import { GiOrange } from 'react-icons/gi';
import { HiViewGrid } from 'react-icons/hi';
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
     const lightgray = '#F4F7FC';
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

     const editBtn = {
        color: darkblue, 
        width: '1.3rem',
        paddingLeft: '10px'
     }
     //hover link effects
     function hover() {

     }

    return (
        <div className="App" style={{display: 'flex', padding: '10px 0 0 10px', backgroundColor: lightgray}}>

            <div style={{width: '80%'}}>
                <div className="status" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p style={heading}>Friday, November 13</p>
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
                    
                    <div style={{width: '90px', paddingTop: '50px', borderRadius: '15px', backgroundColor: darkblue}}>
                        {/* <div style={{padding: '10px 0'}}>
                            <img src={logo} alt="logo" style={{width: '50px'}}/>
                        </div> */}
                        <div style={{padding: '10px 0'}}>
                        <Link to='/dashboard'><AiFillHome style={{color: skyblue, width: '2rem'}} size/></Link>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <MdAccountCircle style={{color: skyblue, width: '2rem'}} size/>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <Link to='/search'><GiOrange style={{color: skyblue, width: '2rem'}} size/></Link>
                        </div>
                        <div style={{padding: '10px 0'}}>
                            <GoGraph style={{color: skyblue, width: '2rem'}} size/>
                        </div>

                        <div style={{padding: '10px 0'}}>
                            <IoMdSettings style={{color: skyblue, width: '2rem'}} size/>
                        </div>
                        
                    </div>


                    <div>
                        <div className="welcome" style={{display: 'flex', backgroundColor: darkblue, marginLeft: '10px', borderRadius: '15px', height: '200px', width: '1068px'}}>
                            <div style={{width: '45%', display: 'grid', placeItems: 'center'}}>
                                <div>
                                    <h2 style={{color: lightgray}}>Good afternoon, Alanna</h2>
                                    <p style={{color: lightgray}}>You have <span style={{color: orange}}>1,500</span> calories left to track.</p>
                                </div> 
                            </div>
                            <div style={{width: '10%', display: 'grid', placeItems: 'center'}}>
                                <div>
                                    <IoMdAddCircle style={{color: skyblue, width: '3rem'}} size/>
                                    {/* <p>Add Meal</p> */}
                                </div>
                                
                            </div>
                            <div style={{width: '45%'}}>
                                <img src={hero} alt='' style={{width: '450px', fontWeight: '900', position: 'relative', top: '-50px'}}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', backgroundColor: lightblue, marginLeft: '10px', marginTop: '10px', borderRadius: '15px', maxWidth: '1068px'}}>
                            <div style={{textAlign: 'left', padding: '0 50px', width: '100%'}}>
                                
                                <div>
                                    <h2>Your food diary for November 14, 2020</h2>
                                    <table className="table" style={{border: '1px solid #081E36'}}>
                                    <tbody style={{width: '100%' }}>
                                            <tr style={{backgroundColor: darkblue}}>
                                                <th style={{width: '30%', color: skyblue, padding: '10px 0'}}>Food</th>
                                                <th style={{width: '10%', color: skyblue, padding: '10px 0'}}>1215 Calories<br/>(kcal)</th>
                                                <th style={{width: '10%', color: skyblue, padding: '10px 0'}}>80 Carbs<br/>(g)</th>
                                                <th style={{width: '10%', color: skyblue, padding: '10px 0'}}>50 Protein<br/>(g)</th>
                                                <th style={{width: '10%', color: skyblue, padding: '10px 0'}}>10 Fat<br/>(g)</th>
                                                <th style={{width: '10%', color: skyblue, padding: '10px 0'}}></th>
                                            </tr>                                        
                                        <tr>
                                            <th style={{backgroundColor: blue, position: 'sticky', border: '1px solid #ddd'}}>Breakfast</th>
                                        </tr>
                                        <tr>
                                            <td>Bacon strips (5)</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Eggs (over easy)</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Orange juice</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>0</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th style={{backgroundColor: blue, border: '1px solid #ddd'}}>Snack</th>
                                        </tr>
                                        <tr>
                                            <td>Pizza bites</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>0</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th style={{backgroundColor: blue, border: '1px solid #ddd'}}>Lunch</th>
                                        </tr>
                                        <tr>
                                            <td>Turkey sandwhich</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nature Valley granola bar</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Small garden salad</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gatorade</td>
                                            <td>10</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td style={{display: 'flex'}}>
                                                <HiViewGrid style={editBtn} size/>
                                                <FaEdit style={editBtn} size/>
                                                <MdDelete style={editBtn} size/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th style={{backgroundColor: blue, border: '1px solid #ddd'}}>Snack</th>
                                        </tr>
                                        <tr>
                                            <td>Sunchips Original</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>0</td>
                                            <HiViewGrid style={editBtn} size/>
                                            <FaEdit style={editBtn} size/>
                                            <MdDelete style={editBtn} size/>
                                        </tr>
                                        <tr>
                                            <th style={{backgroundColor: blue, border: '1px solid #ddd'}}>Dinner</th>
                                        </tr>
                                        <tr>
                                            <td>Steak (3oz)</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>24</td>
                                            <td>3</td>
                                            <HiViewGrid style={editBtn} size/>
                                            <FaEdit style={editBtn} size/>
                                            <MdDelete style={editBtn} size/>
                                        </tr>
                                        <tr>
                                            <td>Asparagus</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>0</td>
                                            <HiViewGrid style={editBtn} size/>
                                            <FaEdit style={editBtn} size/>
                                            <MdDelete style={editBtn} size/>
                                        </tr>
                                        <tr>
                                            <td>Loaded potatoes</td>
                                            <td>120</td>
                                            <td>50</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <HiViewGrid style={editBtn} size/>
                                            <FaEdit style={editBtn} size/>
                                            <MdDelete style={editBtn} size/>
                                        </tr>
                                        <tr>
                                            <td>Cranberry juice</td>
                                            <td>120</td>
                                            <td>20</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <HiViewGrid style={editBtn} size/>
                                            <FaEdit style={editBtn} size/>
                                            <MdDelete style={editBtn} size/>
                                        </tr>
                                        
                                        
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <Database/> */}
                    </div>
                    
                </div>
            </div>

            <div style={{width: '20%', paddingTop: '50px', marginLeft: '10px', borderRadius: '15px 0 0 15px', backgroundColor: blue}}>
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