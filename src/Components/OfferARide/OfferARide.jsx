import React from 'react';
import './OfferRide.sass';
import { DocumentCard, Icon, DatePicker } from 'office-ui-fabric-react';
import AddStop from '../AddStop/AddStop';

class OfferRide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { noOfStops: 1, id: null, isSubmitClicked: false }
    }
    addStop() {
        this.setState({ noOfStops: this.state.noOfStops + 1 });
    }
    appendedComponents = [];
    getAppendedComponents = () => {
        console.log(this.appendedComponents);
        this.appendedComponents = [];
        for (let i = 1; i <= this.state.noOfStops; i++) {
            this.appendedComponents.push(
                <AddStop id={i} />
            )
        }
    }
    showNextForm() {
        this.setState({ isSubmitClicked: true });
    }
    settimeClass(e) {
        this.setState({ id: e.target.id });
    }
    setClass(e) {
        this.setState({ id: e.target.id });
    }

    handleChange() {
        this.props.history.push("/ui/bookaride");
    }

    render() {
        return (
            <div className="offeraRide">
                <DocumentCard className="book">
                    <div className="title">Offer a Ride<label className="switch"><input type="checkbox" name="buttonChanger" checked={false} onClick={this.handleChange.bind(this)} /><span className="slider round"></span></label></div>
                    <div className="tag">we get you the rides asap !</div>
                    <form className="bookingForm">
                        <div className="formdata">
                            <label>From</label>
                            <input type="text" name="from" />
                            <label>To</label>
                            <input type="text" name="to" />
                            <label>Date</label>
                            <DatePicker />
                            <label>
                                Time
                            </label>
                            <div>
                                <span id="time1" className={this.state.id === "time1" ? "activetime" : "time"} onClick={this.settimeClass.bind(this)}>5am - 9am</span>
                                <span id="time2" className={this.state.id === "time2" ? "activetime" : "time"} onClick={this.settimeClass.bind(this)}>9am - 12pm</span>
                                <span id="time3" className={this.state.id === "time3" ? "activetime" : "time"} onClick={this.settimeClass.bind(this)}>12pm - 3pm</span>
                                <span id="time4" className={this.state.id === "time4" ? "activetime" : "time"} onClick={this.settimeClass.bind(this)}>3pm - 6pm</span>
                                <span id="time5" className={this.state.id === "time5" ? "activetime" : "time"} onClick={this.settimeClass.bind(this)}>6pm - 9pm</span>
                            </div>
                        </div>
                        <div className="faicons">
                            <div className="icon"><Icon iconName='StatusCircleInner' className="circle_icon" /></div>
                            <Icon iconName='StatusCircleInner' className="circle" />
                            <Icon iconName='StatusCircleInner' className="circle" />
                            <Icon iconName='StatusCircleInner' className="circle" />
                            <Icon iconName='StatusCircleInner' className="circle" />
                            <div className="icon"><Icon iconName='POISolid' className="poiicon" /></div>
                        </div>

                        <input type="button" className='nextButton' value='Next>>' onClick={this.showNextForm.bind(this)} />
                    </form>
                </DocumentCard>
                {this.state.isSubmitClicked ?
                    <DocumentCard className="book">
                        <div className="title">Offer a Ride</div>
                        <div className="tag">we get you the rides asap !</div>
                        <form className="form">
                            {this.getAppendedComponents()}
                            {this.appendedComponents}
                            <input type="button" className="addStopButton" onClick={this.addStop.bind(this)} value="+" />
                            <table><tr><td>
                                <label>Available Seats</label></td><td>
                                    <label>Price</label></td></tr>
                                <tr><td>
                                    <span id="seat1" onClick={this.setClass.bind(this)} className={this.state.id === "seat1" ? "activeseat" : "vacentSeats"}>1</span>
                                    <span id="seat2" onClick={this.setClass.bind(this)} className={this.state.id === "seat2" ? "activeseat" : "vacentSeats"}>2</span>
                                    <span id="seat3" onClick={this.setClass.bind(this)} className={this.state.id === "seat3" ? "activeseat" : "vacentSeats"}>3</span>
                                </td><td>
                                        <div className="price">180$</div></td></tr>
                            </table>
                            <button className='submitButton' value='Submit'>Submit</button>
                        </form>
                    </DocumentCard>
                    : ""
                }
            </div>
        );
    }
}


export default OfferRide;