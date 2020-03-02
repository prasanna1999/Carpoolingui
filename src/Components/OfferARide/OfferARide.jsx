import React from 'react';
import './OfferRide.css';
import AddStop from '../AddStop/AddStop';

class OfferRide extends React.Component{
    constructor(props){
        super(props);
        this.state={noOfStops:1}
    }
    addStop(){
        console.log("called");
        this.setState({noOfStops:this.state.noOfStops+1});
    }
    appendedComponents = [];
    getAppendedComponents=()=>{
        console.log(this.appendedComponents);
        this.appendedComponents = [];
        for (let i = 1; i <= this.state.noOfStops; i++) {
             this.appendedComponents.push(
            <AddStop id={i} />
        )
        }
    }
    render(){
    return(
        <div className="book">
                <div className="title">Offer a Ride</div>
                <div className="tag">we get you the rides asap !</div>
                <form className="form">
                    {this.getAppendedComponents() }
                    {this.appendedComponents}
                    <input type="button" className="addStopButton" onClick={this.addStop.bind(this)} value="+" />
                    <table><tr><td>
                    <label>Available Seats</label></td><td>
                    <label>Price</label></td></tr>
                    <tr><td><span className="vacentSeats">1</span><span className="vacentSeats">2</span><span className="vacentSeats">3</span></td><td>
                    <div className="price">180$</div></td></tr>
                    </table>
                    <button className='submitButton' value='Submit'>Submit</button>
                </form>
        </div>
    );
}
}


export default OfferRide;