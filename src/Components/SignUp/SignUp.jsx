import React from 'react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import './SignUp.sass';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ isSignUpSelected: true, passwordtype: 'password', Email: null, Password: null, ConfirmPassword: null, errors: { Email: 'e', Password: 'e', ConfirmPassword: 'e' }, isValid: true });
    }
    changeState() {
        this.setState({ isSignUpSelected: !this.state.isSignUpSelected });
    }
    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            passwordtype: this.state.passwordtype === 'input' ? 'password' : 'input'
        });
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'Password':
                errors.Password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'ConfirmPassword':
                errors.ConfirmPassword =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'Email':
                errors.Email =
                    this.validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
        }
        this.setState({ errors, [name]: value });
        this.setState({ [name]: event.target.value });
    }

    validateSignIn() {
        if (!this.validateForm(this.state.errors)) {
            this.setState({ isValid: false });
        }
        else{
            localStorage.setItem('User','Prasanna');
            this.props.history.push("/ui/home");
        }
    }

    validateLogIn(){
        if (!this.validateLoginForm(this.state.errors)) {
            this.setState({ isValid: false });
        }
        else{
            this.props.history.push("/ui/home");
        }
    }

    validateLoginForm = (errors) => {
        errors.ConfirmPassword="";
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    validEmailRegex = RegExp(/^([a-z0-9_.])+\@(([a-z0-9-])+\.)+([a-z]{2,4})+$/i);
    render() {
        const { errors } = this.state;
        return (
            <div className="signUp">
                <div className="caption">
                    <div><img className="image" src={logo} /></div>
                    <div className="captiontitle">
                        <div className="lines">
                            <span className="initial">TURN</span>
                            <span className="second">MILES</span>
                        </div>
                        <div className="lines">
                            <span className="initial">INTO</span>
                            <span className="last">MONEY</span>
                        </div>
                    </div>
                    <div className="tagline">
                        RIDES ON TAP
                    </div>
                </div>
                <div className={this.state.isSignUpSelected ? "signupdetails" : "signupdetails colorchange"}>
                    <div className="signupblock">
                        <div className="signupheading">{this.state.isSignUpSelected ? "Sign Up" : "Login"}</div>
                        <div className="signupform">
                            {!this.state.isValid?<p className="error">Please enter required feilds</p>:""}
                            {errors.Email.length > 0 && errors.Email !== 'e' ? <p className='error'>{errors.Email}</p> : ''}
                            <div className="passwordfeild">
                                <input type="email" name="Email" placeholder="Enter Email Id" onChange={this.handleChange.bind(this)} /></div>
                            {errors.Password.length > 0 && errors.Password !== 'e' ? <p className='error'>{errors.Password}</p> : ''}
                            <div className="passwordfeild">
                                <input type={this.state.passwordtype} name="Password" placeholder="Enter Password" className="password" onChange={this.handleChange.bind(this)} />
                                <span className="showpassword" onClick={this.showHide.bind(this)}>{this.state.passwordtype === 'input' ? <Icon iconName='Hide' className="redeye" /> : <Icon iconName='RedEye' className="redeye" />}</span>
                            </div>
                            {errors.ConfirmPassword.length > 0 && errors.ConfirmPassword !== 'e' ? <p className='error'>{errors.ConfirmPassword}</p> : ''}
                            {this.state.isSignUpSelected ?
                                <div className="passwordfeild">
                                    <input type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={this.handleChange.bind(this)} /></div> : ""}
                            <input className={this.state.isSignUpSelected ? "signupbutton" : "loginbutton"} type="button" value="Submit" onClick={this.state.isSignUpSelected ?this.validateSignIn.bind(this):this.validateLogIn.bind(this)} />
                        </div>
                        <div className="membertext">
                            {this.state.isSignUpSelected ? "Already a member?" : "Not a member?"}
                            {this.state.isSignUpSelected ? <span className="signuppointer" onClick={this.changeState.bind(this)}>LOG IN</span> : <span className="signuppointer" onClick={this.changeState.bind(this)}>SIGN UP</span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;