import React from 'react';

//feature images

const Landing = () => {
    
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
        <div>
            <div>
                <h4>Our Partners</h4>
                <h3>Trust by 50+ Companies</h3>
                {/* include a list of well-known companies */}
            </div>

            <div style={{display: 'flex'}}>
                <div style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                    image here
                </div>
                <div style={{width: '50%', display: 'grid', placeItems: 'center'}}>
                    <div>
                        <h5>How We Can Help</h5>
                        <h3>We help you manage your meals.</h3>
                        <p>
                            We provide a databse that can help you be more conscoius in how you fuel your body.
                            You can plan the meals you want to eat, look up specific items to find their 
                            nutritional value. Set your macros and fitness targets to reach your desired goals.
                        </p>
                        <button>Start Tracking</button>
                    </div>
                </div>
            </div>

            <div className="features">
                <h5>It's Never Been Easier</h5>
                <h3>Track It and Forget It.</h3>
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