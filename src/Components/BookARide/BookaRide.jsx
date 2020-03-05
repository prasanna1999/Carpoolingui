import React from 'react';
import './BookARide.sass';
import { DocumentCard,DatePicker,Toggle } from 'office-ui-fabric-react';
import {Link} from 'react-router-dom';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import 'font-awesome/css/font-awesome.min.css';

class BookARide extends React.Component{
    constructor(props){
        super(props);
        this.state={isSubmitClicked:false,isValid:true,
            From:null,To:null,NoOfSeats:null,Date:null,Time:null,
            errors:{From:'e',To:'e',NoOfSeats:'e',Date:'e',Time:'e'}
        }
    }

    handleToggle=()=> {
        this.props.history.push("/ui/offeraride");
    }
    
    setClass(e){
        if(e.target.innerText==null)
            this.state.errors.Time="Please select atleast one";
        else
            this.state.errors.Time="";
        this.setState({id:e.target.id,Time:e.target.innerText});
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    showMatchedBooking(){
        if (!this.validateForm(this.state.errors)) {
            this.setState({ isValid: false });
        }
        else{
            this.setState({ isValid: true });
            this.setState({isSubmitClicked:true});
        }
    }

    handleDate = (event)=>{
        if(event<new Date())
            this.state.errors.Date ="Please select valid date";
        else
            this.state.errors.Date=""
        this.setState({Date:event});
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'From':
                errors.From =
                    value.length < 2
                        ? 'Please enter minimum 2 letters'
                        : '';
                break;
            case 'To':
                errors.To =
                    value.length < 2
                        ? 'Please enter minimum 2 letters'
                        : '';
                break;
            case 'NoOfSeats':
                errors.NoOfSeats =
                value <= 0 || value>3
                    ? 'Please enter number in between 1 and 3'
                    : '';
                    break;
        }
        this.setState({ errors, [name]: value });
        this.setState({ [name]: event.target.value });
    }
    _onFormatDate = (date) => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
      };

    render(){
        const { errors } = this.state;
    return (
        <div className="bookride">
            <DocumentCard className="book">
                <div className="title">Book a Ride<Toggle className="toggle" checked onClick={this.handleToggle}/></div>
                <div className="tag">we get you the rides asap !</div>
                <form className="bookingForm">
                    <div className="formdata">
                        {!this.state.isValid?<p className="error">Please enter required feilds</p>:""}
                        <label>From {errors.From.length > 0 && errors.From !== 'e' ? <div className='error'>{errors.From}</div> : ''}</label>
                        <input type="text" name="From" onChange={this.handleChange} value={this.state.From}/>
                        <label>To {errors.To.length > 0 && errors.To !== 'e' ? <div className='error'>{errors.To}</div> : ''}</label>
                        <input type="text" name="To"  onChange={this.handleChange} value={this.state.To}/>
                        <label>Seats Required {errors.NoOfSeats.length > 0 && errors.NoOfSeats !== 'e' ? <div className='error'>{errors.NoOfSeats}</div> : ''}</label>
                        <input type="number" name="NoOfSeats"  onChange={this.handleChange} value={this.state.NoOfSeats}/>
                        <label>Date {errors.Date.length > 0 && errors.Date !== 'e' ? <div className='error'>{errors.Date}</div> : ''}</label>
                        <DatePicker name="Date" onSelectDate={this.handleDate} value={this.state.Date} formatDate={this._onFormatDate}/>
                        <label>
                            Time {errors.Time.length > 0 && errors.Time !== 'e' ? <div className='error'>{errors.Time}</div> : ''}
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