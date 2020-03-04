import React from 'react';
import './BookARide.sass';
import { DocumentCard,DatePicker } from 'office-ui-fabric-react';
import {Link} from 'react-router-dom';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import 'font-awesome/css/font-awesome.min.css';

class BookARide extends React.Component{
    constructor(props){
        super(props);
        this.state={isSubmitClicked:false}
    }

    handleChange() {
        this.props.history.push("/ui/offeraride");
    }
    
    setClass(e){
        this.setState({id:e.target.id});
    }

    showMatchedBooking(){
        this.setState({isSubmitClicked:true});
    }

    render(){
    return (
        <div className="bookride">
            <DocumentCard className="book">
                <div className="title">Book a Ride<label className="switch"><input type="checkbox" name="buttonChanger" checked={true} onClick={this.handleChange.bind(this)} /><span className="slider round"></span></label></div>
                <div className="tag">we get you the rides asap !</div>
                <form className="bookingForm">
                    <div className="formdata">
                        <label>From</label>
                        <input type="text" name="from" />
                        <label>To</label>
                        <input type="text" name="to" />
                        <label>Seats Required</label>
                        <input type="text" name="noOfSeats" />
                        <label>Date</label>
                        <DatePicker/>
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
                    </div>
                    <div className="faicons">
                    <div className="icon"><Icon iconName='StatusCircleInner' className="circle_icon"/></div>
                    <Icon iconName='StatusCircleInner' className="circle" />
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <div className="icon"><Icon iconName='POISolid' className="poiicon"/></div>
                    </div>
                    
                    <input type="button" className='submitButton' value='Submit' onClick={this.showMatchedBooking.bind(this)}/>
                </form>
            </DocumentCard>
            {this.state.isSubmitClicked?
            <div className="booking">
                <div className="machedRides">
                    <div className="matches">Your Matches</div>
                    <DocumentCard className="card">
                        <table className="details">
                            <tr className="name">
                                <td colspan="2">Prasanna</td>
                                <td rowspan="2"><img src={logo} /></td>
                            </tr>
                            <tr className="names">
                                <td>From</td><td>To</td>
                            </tr>
                            <tr className="values">
                                <td>
                                    Madhapur
                            <Icon iconName='StatusCircleInner' className="circleicon" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='POISolid' className="poiicon" />
                                </td><td>Ameerpet</td>
                            </tr>
                            <tr className="names">
                                <td>Date</td><td>Time</td>
                            </tr>
                            <tr className="values">
                                <td>dd/mm/yyyy</td><td>5am-9am</td>
                            </tr>
                            <tr className="names">
                                <td>Price</td><td>Seat Availability</td>
                            </tr>
                            <tr className="values">
                                <td>50</td><td>02</td>
                            </tr>
                            <Link to="/ui/bookingstatus/1"><input type="button" name="book" value="Book Now" className="bookingbutton"/></Link>
                        </table>
                    </DocumentCard>
                    <DocumentCard className="card">
                        <table className="details">
                            <tr className="name">
                                <td colspan="2">Prasanna</td>
                                <td rowspan="2"><img src={logo} /></td>
                            </tr>
                            <tr className="names">
                                <td>From</td><td>To</td>
                            </tr>
                            <tr className="values">
                                <td>
                                    Madhapur
                            <Icon iconName='StatusCircleInner' className="circleicon" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='StatusCircleInner' className="circle" />
                                    <Icon iconName='POISolid' className="poiicon" />
                                </td><td>Ameerpet</td>
                            </tr>
                            <tr className="names">
                                <td>Date</td><td>Time</td>
                            </tr>
                            <tr className="values">
                                <td>dd/mm/yyyy</td><td>5am-9am</td>
                            </tr>
                            <tr className="names">
                                <td>Price</td><td>Seat Availability</td>
                            </tr>
                            <tr className="values">
                                <td>50</td><td>02</td>
                            </tr>
                            <Link to="/ui/bookingstatus/1"><input type="button" name="book" value="Book Now" className="bookingbutton"/></Link>
                        </table>
                    </DocumentCard>
                </div>
            </div>
            :""
            }
        </div>
    );
}
}

export default BookARide;