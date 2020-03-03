import React from 'react';
import logo from 'E:/carpoolingui/src/Images/logo.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import 'office-ui-fabric-react';
import {DocumentCard} from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './MyRides.sass';
import Rides from '../Rides';

function MyRides() {
    return (
        <div className="ms-Grid myRides" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                    <div className="bookedRidesTitle"> Booked Rides</div>
                    {Rides.filter(ride => ride.Type == "Booked").map((ride) =>
                        <DocumentCard className="cards">
                            <table className="details">
                                <tr className="name">
                                    <td colspan="2">{ride.Name}</td>
                                    <td rowspan="2"><img src={logo} /></td>
                                </tr>
                                <tr className="names">
                                    <td>From</td>
                                    <td>To</td>
                                </tr>
                                <tr className="values">
                                    <td>
                                        {ride.From}
                                        <Icon iconName='StatusCircleInner' className="circleicon" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='POISolid' className="poiicon" />
                                    </td><td>{ride.To}</td>
                                </tr>
                                <tr className="names">
                                    <td>Date</td><td>Time</td>
                                </tr>
                                <tr className="values">
                                    <td>{ride.Date}</td><td>{ride.Time}</td>
                                </tr>
                                <tr className="names">
                                    <td>Price</td>
                                </tr>
                                <tr className="values">
                                    <td>{ride.Price}</td>
                                </tr>
                            </table>
                        </DocumentCard>
                    )}
                </div>

                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg10 ms-xl6 ms-xxl4">
                    <div className="offeredRidesTitle"> Offered Rides</div>
                    {Rides.filter(ride => ride.Type == "Offered").map((ride) =>
                        <DocumentCard className="cards">
                            <table className="details">
                                <tr className="name">
                                    <td colspan="2">{ride.Name}</td>
                                    <td rowspan="2"><img src={logo} /></td>
                                </tr>
                                <tr className="names">
                                    <td>From</td>
                                    <td>To</td>
                                </tr>
                                <tr className="values">
                                    <td>
                                        {ride.From}
                                        <Icon iconName='StatusCircleInner' className="circleicon" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='StatusCircleInner' className="circle" />
                                        <Icon iconName='POISolid' className="poiicon" />
                                    </td><td>{ride.To}</td>
                                </tr>
                                <tr className="names">
                                    <td>Date</td><td>Time</td>
                                </tr>
                                <tr className="values">
                                    <td>{ride.Date}</td><td>{ride.Time}</td>
                                </tr>
                                <tr className="names">
                                    <td>Price</td>
                                </tr>
                                <tr className="values">
                                    <td>{ride.Price}</td>
                                </tr>
                            </table>
                        </DocumentCard>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyRides;