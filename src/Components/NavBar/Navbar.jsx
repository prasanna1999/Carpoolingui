import React from 'react';
import './NavBar.css';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="profile profilepic"><img src={logo} /></div>
      <div className="profile profilename">John Wills
          <div className="listitems">
          <NavLink activeClassName="active" className="item" to="/sample"><div className="itemname">Profile</div></NavLink>
          <NavLink activeClassName="active" className="item" to="/ui/myrides"><div className="itemname">My Rides</div></NavLink>
          <NavLink activeClassName="active" className="item" to="/signup"><div className="itemname">Logout</div></NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;