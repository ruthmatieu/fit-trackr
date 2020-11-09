import React from 'react';

//images
import hero from '../images/icon-slider.png';
import image from'../images/hero-image.png';

const HeroSection = () => {

    //color pallette
    const lightblue = '#E1F2F9';
    const blue = '#2F98BA';
    const darkblue = '#081E36';
    const white = '#FFFFFF';
    const gray = 'gray';

    const blueButton = {
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

    return (
        <div style={{display: 'flex', backgroundColor: `${lightblue}`, height: '70vh', padding: '0 4rem'}}>
            <div className="info" style={{width: '50%', display: 'grid', placeItems: 'center', textAlign: 'left'}}>
                <div>
                    <h1 style={{color: `${darkblue}`, paddingBottom: '1rem', fontSize: '2.5rem'}}>
                        Track Your Meals & <br/>
                        Stay <span style={{color: `${blue}`}}> Healthy.</span>
                    </h1>
                    <p style={{color: `${gray}`, paddingBottom: '1rem', lineHeight: '1.6rem'}}>
                        When you have trouble managing your time, we are here to help<br/> you 
                        schedule your days to be more productive.
                    </p>
                    <div className="hero-cta">
                        <button style={blueButton}>Get Started</button>
                        <button style={whiteButton}>Watch Video</button>
                    </div>

                    <div>
                        {/* think of something to go here */}
                    </div>
                </div>
            </div>

            <div className="graphics" style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                {/* include here screenshots of app layout and graphs */}
                <img src={image} alt="" style={{width: '500px'}}/>
            </div>
            
        </div>
    )
}

export default HeroSection;