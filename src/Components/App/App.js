import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../NavBar/Navbar';
import BookARide from '../BookARide/BookaRide';
import RideForm from '../RideForm/RideForm';
import OfferARide from '../OfferARide/OfferARide';
import MyRides from '../MyRides/MyRides';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/signup" />
      </Route>
      <Route path="/ui" component={Navbar}/>
      <Route path="/ui/rideform/:id" component={RideForm} />
      <Switch>
        <Route exact path="/ui/home" component={Home} />
        <Route path="/ui/rideform/bookaride" component={BookARide} />
        <Route path="/ui/rideform/offeraride" component={OfferARide} />
        <Route path="/ui/myrides" component={MyRides} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
