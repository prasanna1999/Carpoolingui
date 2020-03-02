import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="greet">
          Hey John!
      </div>
        <span className="buttons"><Link to='/ui/rideform/true'><button className="bookbutton">Book a ride</button></Link></span>
        <span className="buttons"><Link to='/ui/rideform/false'><button className="offerbutton">Offer a ride</button></Link></span>
      </div>
    </div>
  );
}

export default Home;
