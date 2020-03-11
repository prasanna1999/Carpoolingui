import React from 'react';
import { DocumentCard, Label, TextField } from 'office-ui-fabric-react';
import './BookingDetails.sass';
import axios from 'axios';

class BookingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Booking: [] }
    }
    componentDidMount() {
        this.id = this.props.match.params.id;
        axios.get('https://localhost:44334/api/booking/' + this.id)
            .then(response => {
                console.log(response.data);
                this.setState({ Booking: response.data })
            })
            .catch(error=>{
                console.log("Cannot get data");
            })
    }
    cancelBooking=()=>{
        axios.put('https://localhost:44334/api/booking/'+this.state.Booking.id,{
            Status:3,
            NoOfVacentSeats:this.state.Booking.noOfSeats
        })
        .then(response=>{
            this.componentDidMount()
        })
        .catch(error=>{
            console.log("Unable to cancel Booking");
        })
    }
    render() {
        return (
            <div className="bookingDetails">
                <DocumentCard className="detailsCard">
                    <Label className="label">From</Label>
                    <TextField className="textfeild" name="from" value={this.state.Booking.from} disabled />
                    <Label className="label">To</Label>
                    <TextField className="textfeild" name="to" value={this.state.Booking.to} disabled />
                    <Label className="label">Date</Label>
                    <TextField className="textfeild" name="date" value={this.state.Booking.date} disabled />
                    <Label className="label">Time</Label>
                    <TextField className="textfeild" name="time" value={this.state.Booking.time} disabled />
                    {new Date(this.state.Booking.date) > new Date() ? this.state.Booking.status == 0 ? <input type="button" className="cancelButton" onClick={this.cancelBooking} value="Cancel Booking" /> : "" : ""}
                </DocumentCard>
            </div>
        )
    }
}

export default BookingDetails;