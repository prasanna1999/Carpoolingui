import React from 'react';
import { DocumentCard, Label, TextField } from 'office-ui-fabric-react';
import './BookingDetails.scss';
import axios from 'axios';
import { BookingStatus } from '../enum.ts';
import { Link } from 'react-router-dom';

class BookingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Booking: [] }
    }
    componentDidMount() {
        this.id = this.props.match.params.id;
        axios.get('https://localhost:44334/api/booking/' + this.id)
            .then(response => {
                if (response.data.status == 0 && new Date(response.data.date) < new Date()) {
                    axios.put('https://localhost:44334/api/booking/' + response.data.id, {
                        Status: 2,
                        NoOfVacentSeats: response.data.noOfSeats
                    })
                    this.response.data.status = 2;
                }
                this.setState({ Booking: response.data })
            })
            .catch(error => {
                console.log("Cannot get data");
                this.setState({ Booking: [] })
            })
    }
    cancelBooking = () => {
        axios.put('https://localhost:44334/api/booking/' + this.state.Booking.id, {
            Status: 3,
            NoOfVacentSeats: this.state.Booking.noOfSeats
        })
            .then(response => {
                this.componentDidMount()
            })
            .catch(error => {
                console.log("Unable to cancel Booking");
            })
    }
    render() {
        return (
            <div className="bookingDetails">
                <Link className="backbutton" to='/ui/myrides'>My Rides</Link>
                <DocumentCard className="detailsCard">
                    <Label className="label">From</Label>
                    <TextField className="textfeild" name="from" value={this.state.Booking.from} disabled />
                    <Label className="label">To</Label>
                    <TextField className="textfeild" name="to" value={this.state.Booking.to} disabled />
                    <Label className="label">Date</Label>
                    <TextField className="textfeild" name="date" value={this.state.Booking.date} disabled />
                    <Label className="label">Time</Label>
                    <TextField className="textfeild" name="time" value={this.state.Booking.time} disabled />
                    <Label className="label">Status</Label>
                    <TextField className="textfeild" name="time" value={BookingStatus[this.state.Booking.status]} disabled />
                    {new Date(this.state.Booking.date) > new Date() ? this.state.Booking.status == BookingStatus.Pending || BookingStatus.Approved ? <input type="button" className="cancelButton" onClick={this.cancelBooking} value="Cancel Booking" /> : "" : ""}
                </DocumentCard>
            </div>
        )
    }
}

export default BookingDetails;