import React from 'react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import './SignUp.css';
import {Link} from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state=({isSignUpSelected:true,passwordtype:'password'});
    }
    changeState(){
        this.setState({isSignUpSelected:!this.state.isSignUpSelected});
    }
    showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      passwordtype: this.state.passwordtype === 'input' ? 'password' : 'input'
    });
    }
    render() {
        return (
            <div className="signUp">
                <div className="caption">
                    <img className="image" src={logo} />
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
                <div className={this.state.isSignUpSelected?"signupdetails":"signupdetails colorchange"}>
                    <div className="signupheading">{this.state.isSignUpSelected?"Sign Up":"Login"}</div>
                    <div className="signupform">
                    <div className="passwordfeild">
                        <input type="email" name="email" placeholder="Enter Email Id" /></div>
                        <div className="passwordfeild">
                        <input type={this.state.passwordtype} name="password" placeholder="Enter Password" className="password" />
                        <span className="showpassword" onClick={this.showHide.bind(this)}>{this.state.passwordtype === 'input' ?  <Icon iconName='Hide' className="redeye"/>:<Icon iconName='RedEye' className="redeye"/> }</span>
                        </div>
                        {this.state.isSignUpSelected?<div className="passwordfeild"><input type="password" name="confirmPassword" placeholder="Confirm Password" /></div>:""}
                        <Link to="/ui/home" className="submitlink"><input className={this.state.isSignUpSelected?"signupbutton":"loginbutton"} type="button" value="Submit" /></Link>
                    </div>
                    <div className="membertext">
                        {this.state.isSignUpSelected?"Already a member?":"Not a member?"}
                        {this.state.isSignUpSelected?<span className="signuppointer" onClick={this.changeState.bind(this)}>LOG IN</span>:<span className="signuppointer" onClick={this.changeState.bind(this)}>SIGN UP</span>}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;