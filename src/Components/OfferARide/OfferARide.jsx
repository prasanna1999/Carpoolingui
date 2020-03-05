import React from 'react';
import './OfferRide.sass';
import { DocumentCard, Icon, DatePicker,Toggle } from 'office-ui-fabric-react';
import AddStop from '../AddStop/AddStop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
    autoClose: 2000,
    draggable: false,
});
class OfferRide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfStops: 1, id: "", isSubmitClicked: false,isValid:true,isStopValid:true,seatid:"",
            From: "", To: "", NoOfSeats: "", Date: "", Time: "",
            errors: { From: 'e', To: 'e', Date: 'e', Time: 'e' },
            stoperrors: {NoOfSeats: 'e'}
        }
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
    
    OfferRide=()=>{
        if(!this.validateForm(this.state.stoperrors)){
            this.setState({isStopValid:false});
        }
        else{
            this.setState({ isStopValid: true });
            toast("Ride Added SuccessFully!");
            this.setState({noOfStops: 1, id: "", isSubmitClicked: false,isValid:true,isStopValid:true,seatid:"",
                From: "", To: "", NoOfSeats: "", Date: "", Time: "",
                errors: { From: 'e', To: 'e', Date: 'e', Time: 'e' },
                stoperrors: {NoOfSeats: 'e'}});
        }
    }
    showNextForm() {
        if (!this.validateForm(this.state.errors)) {
            this.setState({ isValid: false });
        }
        else{
            this.setState({ isValid: true });
            this.setState({ isSubmitClicked: true });
        }
    }
    settimeClass(e) {
        if (e.target.innerText == null)
            this.state.errors.Time = "Please select atleast one";
        else
            this.state.errors.Time = "";
        this.setState({ id: e.target.id, Time: e.target.innerText });
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    setClass(e) {
        if (e.target.innerText == null)
            this.state.stoperrors.NoOfSeats = "Please select atleast one";
        else
            this.state.stoperrors.NoOfSeats = "";
        this.setState({ seatid: e.target.id, NoOfSeats: e.target.innerText });
    }

    handleToggle=()=> {
        this.props.history.push("/ui/bookaride");
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
        }
        this.setState({ errors, [name]: value });
        this.setState({ [name]: event.target.value });
    }
    _onFormatDate = (date) => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
      };

    render() {
        const { errors } = this.state;
        const {stoperrors} = this.state;
        return (
            <div className="offeraRide">
                <DocumentCard className="book">
                    <div className="title">Offer a Ride<Toggle className="toggle" onClick={this.handleToggle}/></div>
                    <div className="tag">we get you the rides asap !</div>
                    {!this.state.isValid?<p className="error">Please enter required feilds</p>:""}
                    <form className="bookingForm">
                        <div className="formdata">
                            <label>From {errors.From.length > 0 && errors.From !== 'e' ? <div className='error'>{errors.From}</div> : ''}</label>
                            <input type="text" name="From" onChange={this.handleChange} value={this.state.From} />
                            <label>To {errors.To.length > 0 && errors.To !== 'e' ? <div className='error'>{errors.To}</div> : ''}</label>
                            <input type="text" name="To" onChange={this.handleChange} value={this.state.To} />
                            <label>Date {errors.Date.length > 0 && errors.Date !== 'e' ? <div className='error'>{errors.Date}</div> : ''}</label>
                            <DatePicker name="Date" onSelectDate={this.handleDate} value={this.state.Date} formatDate={this._onFormatDate} />
                            <label>
                                Time {errors.Time.length > 0 && errors.Time !== 'e' ? <div className='error'>{errors.Time}</div> : ''}
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
                        {!this.state.isStopValid?<p className="error">Please enter required feilds</p>:""}
                            {this.getAppendedComponents()}
                            {this.appendedComponents}
                            <input type="button" className="addStopButton" onClick={this.addStop.bind(this)} value="+" />
                            <table><tr><td>
                                <label>Available Seats {stoperrors.NoOfSeats.length > 0 && stoperrors.NoOfSeats !== 'e' ? <div className='error'>{stoperrors.NoOfSeats}</div> : ''}</label></td><td>
                                    <label>Price</label></td></tr>
                                <tr><td>
                                    <span id="seat1" onClick={this.setClass.bind(this)} className={this.state.seatid === "seat1" ? "activeseat" : "vacentSeats"}>1</span>
                                    <span id="seat2" onClick={this.setClass.bind(this)} className={this.state.seatid === "seat2" ? "activeseat" : "vacentSeats"}>2</span>
                                    <span id="seat3" onClick={this.setClass.bind(this)} className={this.state.seatid === "seat3" ? "activeseat" : "vacentSeats"}>3</span>
                                </td><td>
                                        <div className="price">180$</div></td></tr>
                            </table>
                            <input type="button" className='submitButton' value='Submit' onClick={this.OfferRide} />
                        </form>
                    </DocumentCard>
                    : ""
                }
            </div>
        );
    }
}


export default OfferRide;