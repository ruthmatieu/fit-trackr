import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Data from './Data'
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings, IoMdAddCircle } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { GiOrange } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
// import { Link } from "react-router-dom";

//feature images
import hero from '../../images/dashboard-hero.png';
import defautlImage from '../../images/default-profile-image.png'

const Database = () => {
    
    //color pallette
    const lightblue = '#E1F2F9';
    const blue = '#2F98BA';
    const skyblue = '#97D4E7'
    const darkblue = '#081E36';
    const white = '#FFFFFF';
    const orange = '#F77741';
    const gray = 'gray';
    const lightgray = '#FCFBFF';
    const offwhite = '#FCFAFE';

    const heading = {
        color: darkblue, 
     }

    const key = 'm8RppA8229DXhFuvnkkgeyv76ixlpSCalwX37v1u';

    const [data, setData] = useState([]);
    //2. state for search bar
    const [search, setSearch] = useState('');
    //3. only when search is clicked is when we fetch the data
    const [submit, setSubmit] = useState('chicken')

    useEffect(() => {
        axios
            .get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${submit}&pageSize=25`)
            .then(res => {
                console.log(res.data.foods);
                setData(res.data.foods);
            })
            .catch(err => {
                console.log(err)
            })
    }, [submit])

    const changeHandler = e => {
        setSearch(e.target.value) //value of user input
            // console.log(search)//just to see results
    }
        
    const submitSearch = e => {
        e.preventDefault();
        setSubmit(search);
        setSearch('')//refreshes search once submitted
    }

    return (
        <div >

            <div className="App" style={{display: 'flex', padding: '10px 0 0 10px', backgroundColor: lightgray}}>

            <div style={{width: '80%'}}>
                <div className="status" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p style={heading}>Monday, October 9</p>
                    </div>
                    <div className="">
                        <p>Alanna Civil</p>
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
                                    <h2>Welcome, Alanna</h2>
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
                        <div style={{backgroundColor: white, marginLeft: '10px', marginTop: '10px', borderRadius: '15px', height: '80vh', width: '1068px'}}>
                            <form onSubmit={submitSearch}>
                                <input
                                    type='text'
                                    name='search'
                                    placeholder='search food or brand name'
                                    value={search}
                                    onChange={changeHandler}
                                />
                                <button>Sarch</button>
                            </form>

                            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '0 50px'}}>
                                {data.map(item => (
                                    <Data
                                    key={item.fdcId}
                                    title={item.lowercaseDescription}
                                    // calories={Math.round(item.calories)}
                                    brand={item.brandOwner}
                                    // ingredients={item.recipe.ingredients}
                                    />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width: '20%', height: '100vh', paddingTop: '50px', marginLeft: '10px', borderRadius: '15px 0 0 15px', backgroundColor: white}}>
                <img src={defautlImage} alt="profile image" style={{width: '130px', borderRadius: '50%', border: '5px solid orange'}}/>
                <h4>Alanna Civil</h4>
                <h6>@alannacivil</h6>
                <p>Height: 5' 1"</p>
                <p>Weight: 125lbs</p>
            </div>
        </div>
            
        </div>
    )
}

export default Database;