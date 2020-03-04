import React from 'react';
import './App.sass';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../NavBar/Navbar';
import BookARide from '../BookARide/BookaRide';
import RideForm from '../RideForm/RideForm';
import BookingStatus from '../BookingStatus/BookingStatus';
import OfferARide from '../OfferARide/OfferARide';
import MyRides from '../MyRides/MyRides';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/signup" />
      </Route>
      <Route path="/ui" component={Navbar}/>
      <Switch>
        <Route exact path="/ui/home" component={Home} />
        <Route path="/ui/bookaride" component={BookARide} />
        <Route path="/ui/offeraride" component={OfferARide} />
        <Route path="/ui/myrides" component={MyRides} />
        <Route path="/signup" component={SignUp} />
        <Route path="/ui/bookingstatus/:id" component={BookingStatus}/>
        <Route path="/ui/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
