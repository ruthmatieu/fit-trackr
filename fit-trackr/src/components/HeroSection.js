import React from 'react';

const HeroSection = () => {

    //color tray
    const lightblue = '#E1F2F9';
    const blue = '#2F98BA';
    const darkblue = '#081E36';
    const white = '#FFFFFF';
    const orange = '#F77741';
    const gray = 'gray';

    return (
        <div style={{display: 'flex', backgroundColor: `${lightblue}`, height: '80vh'}}>
            <div className="info" style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                <div>
                    <h1 style={{color: `${darkblue}`}}>
                        Track Your Meals<br/>
                        Stay <span style={{color: `${blue}`}}> Healthy</span>
                    </h1>
                    <p style={{color: `${gray}`}}>
                        When you have trouble managing your time, we are here to help you 
                        schedule your days to be more productive.
                    </p>
                    <div className="hero-cta">
                        <button>Get Started</button>
                        <button>See How It Works</button>
                    </div>

                    <div>
                        {/* think of something to go here */}
                    </div>
                </div>
            </div>

            <div className="graphics" style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                {/* include here screenshots of app layout and graphs */}
                image here
            </div>
            
        </div>
    )
}

export default HeroSection;