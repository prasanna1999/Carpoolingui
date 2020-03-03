import React from 'react';
import './BookARide.sass';
import {DocumentCard} from 'office-ui-fabric-react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import {Icon} from 'office-ui-fabric-react/lib/Icon';
import 'font-awesome/css/font-awesome.min.css';

function BookARide() { 
    return(
        <div className="booking">
            <div className="machedRides">
                <div className="matches">Your Matches</div>
                <DocumentCard className="card">
                <table className="details">
                    <tr className="name">
                        <td colspan="2">Prasanna</td>
                        <td rowspan="2"><img src={logo}/></td>
                    </tr>
                    <tr className="names">
                        <td>From</td><td>To</td>
                    </tr>
                    <tr className="values">
                        <td>
                            Madhapur
                            <Icon iconName='StatusCircleInner' className="circleicon"/>
                    <Icon iconName='StatusCircleInner' className="circle" />
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='POISolid' className="poiicon"/>
                        </td><td>Ameerpet</td>
                    </tr>
                    <tr  className="names">
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
                    </table>
                </DocumentCard>    
                <DocumentCard className="card">
                <table className="details">
                    <tr className="name">
                        <td colspan="2">Prasanna</td>
                        <td rowspan="2"><img src={logo}/></td>
                    </tr>
                    <tr className="names">
                        <td>From</td><td>To</td>
                    </tr>
                    <tr className="values">
                        <td>
                            Madhapur
                            <Icon iconName='StatusCircleInner' className="circleicon"/>
                    <Icon iconName='StatusCircleInner' className="circle" />
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='StatusCircleInner' className="circle"/>
                    <Icon iconName='POISolid' className="poiicon"/>
                        </td><td>Ameerpet</td>
                    </tr>
                    <tr  className="names">
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
                    </table>
                </DocumentCard> 
            </div>
        </div>
    );
}

export default BookARide;