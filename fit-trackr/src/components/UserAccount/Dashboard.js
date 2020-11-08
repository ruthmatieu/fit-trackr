import React from 'react';

const Dashboard = () => {
    return (
        /*create new nav:
         - logo
         - home (Dashboard.js)
         - diary
        */
        <div style={{display: 'flex'}}>
            <div>
                {/* insert coloric graph */}
            </div>

            <div className="welcome">
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