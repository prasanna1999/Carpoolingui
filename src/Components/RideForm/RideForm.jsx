import React from 'react';
import './RideForm.sass';
import { Link, withRouter } from 'react-router-dom';
import {DocumentCard} from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class RideForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isBookRideSelected: (this.props.match.params.id === "true") }
    }
    handleChange() {
        this.props.history.push("/ui/rideform/" + !this.state.isBookRideSelected);
        this.setState({ isBookRideSelected: !(this.state.isBookRideSelected),id:null });
    }

    setClass(e){
        this.setState({id:e.target.id});
    }
    

    render() {
        return (
            <DocumentCard className="book">
                <div className="title">{this.state.isBookRideSelected ? "Book a Ride" : "Offer a Ride"} <label className="switch"><input type="checkbox" checked={this.state.isBookRideSelected} name="buttonChanger" onClick={this.handleChange.bind(this)} /><span className="slider round"></span></label></div>
                <div className="tag">we get you the rides asap !</div>
                <form className="bookingForm">
                    <div className="formdata">
                        <label>From</label>
                        <input type="text" name="from" />
                        <label>To</label>
                        <input type="text" name="to" />
                        <label>Date</label>
                        <input type="date" name="date" placeholder="xx/mm/yyyy" />
                    </div>
                    <div className="faicons">
                    <div className="icon"><Icon iconName='StatusCircleInner' className="circle_icon"/></div>
                    <Icon iconName='StatusCircleInner' className="circle" />
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <div className="icon"><Icon iconName='POISolid' className="poiicon"/></div>
                    </div>
                    <label>
                        Time
                    </label>
                    <div>
                        <span id="time1" className={this.state.id==="time1"?"activetime":"time"} onClick={this.setClass.bind(this)}>5am - 9am</span>
                        <span id="time2" className={this.state.id==="time2"?"activetime":"time"} onClick={this.setClass.bind(this)}>9am - 12pm</span>
                        <span id="time3" className={this.state.id==="time3"?"activetime":"time"} onClick={this.setClass.bind(this)}>12pm - 3pm</span>
                        <span id="time4" className={this.state.id==="time4"?"activetime":"time"} onClick={this.setClass.bind(this)}>3pm - 6pm</span>
                        <span id="time5" className={this.state.id==="time5"?"activetime":"time"} onClick={this.setClass.bind(this)}>6pm - 9pm</span>
                    </div>
                    {this.state.isBookRideSelected ? <Link to="/ui/rideform/bookaride"><button className='submitButton' value='Submit'>Submit</button></Link>
                        : <Link to="/ui/rideform/offeraride"><button className='nextButton' value='Submit'>Next >></button></Link>}
                </form>
            </DocumentCard>
        );
    }
}

export default withRouter(RideForm);