import React from 'react';
import { Link } from "react-router-dom";

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

    const features = {
        featureOne: {
            image: '',
            title: 'Track Your Meals',
            description: 'Easily search and find the nutrional information for the food you are consuming.',
            cta: 'Get Started'
        },
        featureTwo: {
            image: '',
            title: 'Track Your Meals',
            description: '',
            cta: ''
        },
        featureThree: {
            image: '',
            title: 'Track Your Meals',
            description: '',
            cta: ''
        }
    }
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
                        <h2 style={{color: `${darkblue}`}}>We Help You Manage Your Meals.</h2>
                        <p style={{color: `${gray}`, paddingBottom: '1rem', lineHeight: '1.6rem'}}>
                            We provide a databse that can help you be more conscoius in how you fuel your body.
                            You can plan the meals you want to eat, look up specific items to find their 
                            nutritional value. Set your macros and fitness targets to reach your desired goals.
                        </p>
                        <Link to="/sign-in"><button style={button}>Start Tracking</button></Link>
                    </div>
                </div>
            </div>

            <div className="features">
                <h5 style={{color: `${blue}`, textTransform: 'uppercase'}}>It's Never Been Easier</h5>
                <h2 style={{color: `${darkblue}`}}>Track It and Forget It.</h2>
            </div>

            <div className="testimonials">
                <img src="" alt=""/>
            </div>

            <div>
                <h4>What are you waiting for?<br/>Start tracking now!</h4>
                <p>Find us in the app store</p>
                <button>Apple Store</button>
                <button>Google Play</button>
            </div>
        </div>
    )
}

export default Landing;