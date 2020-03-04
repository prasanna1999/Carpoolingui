import React from 'react';
import './NavBar.sass';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { NavLink,Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/ui/home"><img src={logo} /></Link>
      </div>
      <div className="profileinfo">
      <div className="profilename">John Wills</div>
      <div className="profilepic"><img src={logo}/></div>
        <div className="listitems">
          <NavLink activeClassName="active" className="item" to="/ui/profile"><div className="itemname">Profile</div></NavLink>
          <NavLink activeClassName="active" className="item" to="/ui/myrides"><div className="itemname">My Rides</div></NavLink>
          <NavLink activeClassName="active" className="item" to="/signup"><div className="itemname">Logout</div></NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;