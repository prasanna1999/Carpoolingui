import React from 'react';
import { DocumentCard, Label, TextField } from 'office-ui-fabric-react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import './RideDetails.sass';
import axios from 'axios';

class RideDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Ride: [], ViaPoints: [], Bookings: [] }
    }
    componentDidMount() {
        this.id = this.props.match.params.id;
        axios.get('https://localhost:44334/api/ride/' + this.id)
            .then(response => {
                this.setState({ Ride: response.data })
                if (response.data.status == 0 && new Date(response.data.date) < new Date()) {
                    axios.put('https://localhost:44334/api/ride/' + this.id, {
                        Status: 2,
                        NoOfVacentSeats: response.data.noOfVacentSeats
                    })
                }
            })
        axios.get('https://localhost:44334/api/location/' + this.id)
            .then(response => {
                console.log(response.data)
                this.setState({ ViaPoints: response.data });
            })
        axios.get('https://localhost:44334/api/booking/rideBookings/' + this.id)
            .then(response => {
                this.setState({ Bookings: response.data });
            })
    }
    cancelRide = () => {
        axios.put('https://localhost:44334/api/ride/' + this.id, {
            Status: 1,
            NoOfVacentSeats: this.state.Ride.noOfVacentSeats
        })
            .then(response => {
                this.componentDidMount();
            })
        axios.put('https://localhost:44334/api/booking/' + this.id)
    }
    approveBooking(booking) {
        axios.put('https://localhost:44334/api/booking/' + booking.id, {
            Status: 1,
            NoOfVacentSeats: booking.noOfPersons
        })
            .then(response => {
                this.componentDidMount();
            })
    }
    rejectBooking(booking) {
        axios.put('https://localhost:44334/api/booking/' + booking.id, {
            Status: 2,
            NoOfVacentSeats: booking.noOfPersons
        })
            .then(response => {
                this.componentDidMount();
            })
    }
    render() {
        return (
            <div className="rideDetails">
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl4 ms-xxl3">
                            <DocumentCard className="detailsCard">
                                <Label>From</Label>
                                <TextField name="from" value={this.state.Ride.from} disabled />
                                <Label>To</Label>
                                <TextField name="to" value={this.state.Ride.to} disabled />
                                {this.state.ViaPoints.length > 0 ? <Label>ViaPoints</Label> : ""}
                                {this.state.ViaPoints.map((viaPoint) =>
                                    <TextField value={viaPoint.locationName} disabled />
                                )}
                                <Label>Date</Label>
                                <TextField name="date" value={this.state.Ride.date} disabled />
                                <Label>Time</Label>
                                <TextField name="time" value={this.state.Ride.time} disabled />
                                {new Date(this.state.Ride.date) > new Date() ? this.state.Ride.status == 0 ? <input type="button" className="cancelButton" onClick={this.cancelRide} value="Cancel Ride" /> : <div><Label>Status</Label><TextField value="Cancelled" disabled/></div> : <div><Label>Status</Label><TextField value="Completed" disabled/></div>}
                            </DocumentCard>
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl8 ms-xxl9">
                        {this.state.Bookings.length>0?<div className="heading">Ride Bookings</div>:<div className="heading">No one booked your ride.</div>}
                            <div className="ms-Grid" dir="ltr">
                                <div className="ms-Grid-row">
                                    {this.state.Bookings.map((booking) =>
                                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl4 ms-xxl4 bookingCard">
                                            <DocumentCard className="cards">
                                                <table className="details">
                                                    <tr className="name">
                                                        <td colspan="2">{booking.Name}</td>
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
                                                        <td>No Of Seats</td>
                                                    </tr>
                                                    <tr className="values">
                                                        <td>{booking.price}</td>
                                                        <td>{booking.noOfPersons}</td>
                                                    </tr>
                                                </table>
                                                {booking.status == 0 ?
                                                    new Date(booking.date) > new Date() ?
                                                        <div className="buttons"><input type="button" className="approveButton" value="Approve Booking" onClick={this.approveBooking.bind(this, booking)} />
                                                            <input type="button" className="rejectButton" value="Reject Booking" onClick={this.rejectBooking.bind(this, booking)} />
                                                        </div>
                                                        :
                                                        ""
                                                    : ""
                                                }
                                            </DocumentCard>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RideDetails;