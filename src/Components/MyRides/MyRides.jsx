import React from 'react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import 'office-ui-fabric-react';
import { DocumentCard } from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './MyRides.sass';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MyRides extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Rides: [], Bookings: [], userName: [] };
    }
    componentDidMount() {
        axios.get('https://localhost:44334/api/ride/userRides/' + localStorage.getItem('Id'))
            .then(response => {
                this.setState({ Rides: response.data })
            })
            .catch(error=>{
                this.setState({Rides:[]})
            })
        axios.get('https://localhost:44334/api/booking/userBookings/' + localStorage.getItem('Id'))
            .then(response => {
                this.setState({ Bookings: response.data })
                let users;
                this.state.Bookings.forEach(function (booking) {
                    console.log(booking)
                    let userId;
                    axios.get('https://localhost:44334/api/ride/' + booking.rideId)
                        .then(response => {
                            console.log(response.data)
                            userId = response.data.userId
                            axios.get('https://localhost:44334/api/user/' + userId)
                                .then(response => {
                                    console.log(response.data)
                                    this.setState({ userName: this.state.userName.concat(response.data.name) })
                                })
                        })
                }, this);
            })
            .catch(error=>{
                this.setState({Bookings:[]})
            })
    }
    index = 0
    render() {
        return (
            <div className="ms-Grid myRides" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                        <div className="bookedRidesTitle"> Booked Rides</div>
                        {this.state.Bookings.length > 0 ? "" : <div className="heading">You have not booked any ride yet.</div>}
                        <div className="hidedisplay">{this.index = 0}</div>
                        {this.state.Bookings.map((booking) =>
                            <DocumentCard className="cards">
                                <table className="details">
                                    <tr className="name">
                                        <td colspan="2">{this.state.userName[this.index]}</td>
                                        <td rowspan="2"><img src={logo} /></td>
                                    </tr>
                                    <tr className="names">
                                        <td>From</td>
                                        <td>To</td>
                                    </tr>
                                    <tr className="values">
                                        <td>
                                            {booking.from}
                                            <Icon iconName='StatusCircleInner' className="circleicon" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='POISolid' className="poiicon" />
                                        </td><td>{booking.to}</td>
                                    </tr>
                                    <tr className="names">
                                        <td>Date</td><td>Time</td>
                                    </tr>
                                    <tr className="values">
                                        <td>{booking.date.slice(0, 10)}</td><td>{booking.time.slice(11, )}</td>
                                    </tr>
                                    <tr className="names">
                                        <td>Price</td>
                                    </tr>
                                    <tr className="values">
                                        <td>{booking.price}</td>
                                        <td><Link to={"/ui/bookedRide/" + booking.id}><input type="button" value="View Details" className="button" /></Link></td>
                                    </tr>
                                </table>
                                <div className="hidedisplay">{this.index++}</div>
                            </DocumentCard>
                        )}
                    </div>

                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                        <div className="offeredRidesTitle"> Offered Rides</div>
                        {this.state.Rides.length > 0 ? "" : <div className="heading">You have not offered any ride yet.</div>}
                        {this.state.Rides.map((ride) =>
                            <DocumentCard className="cards">
                                <table className="details">
                                    <tr className="name">
                                        <td colspan="2">{ride.Name}</td>
                                        <td rowspan="2"><img src={logo} /></td>
                                    </tr>
                                    <tr className="names">
                                        <td>From</td>
                                        <td>To</td>
                                    </tr>
                                    <tr className="values">
                                        <td>
                                            {ride.from}
                                            <Icon iconName='StatusCircleInner' className="circleicon" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='StatusCircleInner' className="circle" />
                                            <Icon iconName='POISolid' className="poiicon" />
                                        </td><td>{ride.to}</td>
                                    </tr>
                                    <tr className="names">
                                        <td>Date</td><td>Time</td>
                                    </tr>
                                    <tr className="values">
                                        <td>{ride.date.slice(0, 10)}</td><td>{ride.time.slice(11, )}</td>
                                    </tr>
                                    <tr className="names">
                                        <td>Price</td>
                                    </tr>
                                    <tr className="values">
                                        <td>{ride.price}</td>
                                        <td><Link to={"/ui/offeredRide/" + ride.id}><input type="button" value="View Details" className="button" /></Link></td>
                                    </tr>
                                </table>
                            </DocumentCard>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyRides;