import React from 'react';
import './OfferRide.sass';
import {DocumentCard} from 'office-ui-fabric-react';
import AddStop from '../AddStop/AddStop';

class OfferRide extends React.Component{
    constructor(props){
        super(props);
        this.state={noOfStops:1,id:null}
    }
    addStop(){
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
    setClass(e){
        this.setState({id:e.target.id});
    }
    render(){
    return(
        <DocumentCard className="book">
                <div className="title">Offer a Ride</div>
                <div className="tag">we get you the rides asap !</div>
                <form className="form">
                    {this.getAppendedComponents() }
                    {this.appendedComponents}
                    <input type="button" className="addStopButton" onClick={this.addStop.bind(this)} value="+" />
                    <table><tr><td>
                    <label>Available Seats</label></td><td>
                    <label>Price</label></td></tr>
                    <tr><td>
                        <span id="seat1" onClick={this.setClass.bind(this)} className={this.state.id==="seat1"?"activeseat":"vacentSeats"}>1</span>
                        <span id="seat2" onClick={this.setClass.bind(this)} className={this.state.id==="seat2"?"activeseat":"vacentSeats"}>2</span>
                        <span id="seat3" onClick={this.setClass.bind(this)} className={this.state.id==="seat3"?"activeseat":"vacentSeats"}>3</span>
                    </td><td>
                    <div className="price">180$</div></td></tr>
                    </table>
                    <button className='submitButton' value='Submit'>Submit</button>
                </form>
        </DocumentCard>
    );
}
}


export default OfferRide;