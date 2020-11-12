import React from 'react';
import { Link } from "react-router-dom";
import { HiUserGroup } from 'react-icons/hi';
import { IoIosStopwatch } from 'react-icons/io';
import { FaBeer } from 'react-icons/fa';

//feature images
import landing from '../images/landing-image.png';

const Landing = () => {
    
    //color pallette
    const lightblue = '#E1F2F9';
    const blue = '#2F98BA';
    const darkblue = '#081E36';
    const white = '#FFFFFF';
    const orange = '#F77741';
    const gray = 'gray';
    const offwhite = '#FCFAFE';

    const button = {
        padding: '13px 25px',
        backgroundColor: blue,
        color: white,
        marginRight: '15px',
        borderRadius: '6px',
        border: 'none'
    }

    const whiteButton = {
        padding: '13px 25px',
        backgroundColor: white,
        color: gray,
        marginRight: '15px',
        borderRadius: '6px',
        border: 'none'
    }

    const featureButton = {
        padding: '10px 25px',
        backgroundColor: blue,
        color: white,
        marginRight: '15px',
        borderRadius: '6px',
        border: 'none'
    }

    const features = [
        {
            id: 1,
            icon: <IoIosStopwatch/>, 
            title: 'Track Your Meals',
            description: 'FitTrackr is filled with all the neccessary features and tools you need to successfuly gain control of your health.',
            cta: 'Get Started',
            link: '/sign-in'
        },
        {
            id: 2,
            icon: <HiUserGroup/>,
            title: 'Build an Online Community',
            description: 'Easily search and find the nutrional information you need as well as connect with others and get healhier together.',
            cta: 'Sign Up',
            link: '/register'
        },
        {
            id: 3,
            icon: '',
            title: 'Learn how FitTrackr can',
            description: 'Personal dashboard with an overview of everything, keep track of your progress and goals daily.',
            cta: 'Learn More',
            link: '/about'
        }  
    ]
    return (
        <div style={{ padding: '0 4rem', backgroundColor: offwhite}}>
            <div style={{ padding: '4rem 0'}}>
                <h5 style={{color: `${blue}`, textTransform: 'uppercase'}}>Our Partners</h5>
                <h2 style={{color: `${darkblue}`}}>Trusted by these fine companies and many more</h2>
                <img style={{padding: '0 50px'}} src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
                <img style={{padding: '0 50px'}} src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
                <img style={{padding: '0 50px'}} src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
                <img style={{padding: '0 50px'}} src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
            </div>

            <div style={{display: 'flex', padding: '50px 0 90px 0'}}>
                <div style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                    <img src={landing} alt='' style={{width: '400px'}}/>
                </div>
                <div style={{width: '50%', display: 'grid', placeItems: 'center', textAlign: 'left'}}>
                    <div>
                        <h5 style={{color: `${blue}`, textTransform: 'uppercase'}}>How We Can Help</h5>
                        <h2 style={{color: `${darkblue}`}}>We Help You Manage Your Meals</h2>
                        <p style={{color: `${gray}`, paddingBottom: '1rem', lineHeight: '1.6rem'}}>
                            We provide a databse that can help you be more conscoius in how you fuel your body.
                            You can plan the meals you want to eat, look up specific items to find their 
                            nutritional value. Set your macros and fitness targets to reach your desired goals.
                        </p>
                        <Link to="/register"><button style={button}>Start Tracking</button></Link>
                    </div>
                </div>
            </div>

            <div className="features">
                <h5 style={{color: `${blue}`, textTransform: 'uppercase'}}>It's Never Been Easier</h5>
                <h2 style={{color: `${darkblue}`}}>Track It and Forget It</h2>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    {features.map(item => (
                        <div id={item.id} style={{width: '350px', paddingBottom: '50px', backgroundColor: white, padding: '50px 0', margin: '10px', borderRadius: '25px'}} className="feature-div">
                            <button style={{width: '65px', height: '65px', backgroundColor: orange, border: 'none', borderRadius: '50%'}}>{item.icon}</button>
                            <div style={{padding: '10px 50px'}}>
                                <h4 style={{}}>{item.title}</h4>
                                <p style={{color: gray}}>{item.description}</p>
                            </div>
                            <Link to={item.link}><button style={featureButton}>{item.cta}</button></Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonials">
                <img src="" alt=""/>
            </div>

            <div style={{backgroundColor: "lightgoldenrodyellow"}}>
                <h4>What are you waiting for?<br/>Start tracking now!</h4>
                <p>Find us in the app store</p>
                <button style={button}>Apple Store</button>
                <button style={whiteButton}>Google Play</button>
            </div>
        </div>
    )
}

export default Landing;