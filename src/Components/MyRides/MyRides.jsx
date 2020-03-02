import React from 'react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './MyRides.css';

function MyRides() {
    return (
        <div className="ms-Grid myRides" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                    <div className="bookedRidesTitle"> Booked Rides</div>
                    <div className="cards">
                        <table className="details">
                            <tr className="name">
                                <td colspan="2">Prasanna</td>
                                <td rowspan="2"><img src={logo} /></td>
                            </tr>
                            <tr className="names">
                                <td>From</td>
                                <td>To</td>
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
                                <td>Price</td>
                            </tr>
                            <tr className="values">
                                <td>50</td>
                            </tr>
                        </table>
                    </div>
                    <div className="cards">
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
                                <td>Price</td>
                            </tr>
                            <tr className="values">
                                <td>50</td>
                            </tr>
                        </table>
                    </div>
                    <div className="cards">
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
                                <td>Price</td>
                            </tr>
                            <tr className="values">
                                <td>50</td>
                            </tr>
                        </table>
                    </div>
                </div>
            
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                    <div className="offeredRidesTitle"> Offered Rides</div>
                    <div className="cards">
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
                                <td>Price</td>
                            </tr>
                            <tr className="values">
                                <td>50</td>
                            </tr>
                        </table>
                    </div>
                    <div className="cards">
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
                                <td>Price</td>
                            </tr>
                            <tr className="values">
                                <td>50</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyRides;