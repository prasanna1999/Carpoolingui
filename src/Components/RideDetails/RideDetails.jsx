import React from 'react';
import {DocumentCard,Label,TextField} from 'office-ui-fabric-react';
import './RideDetails.sass';
import axios from 'axios';

class RideDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={Ride:[]}
    }
    componentDidMount(){
        this.id=this.props.match.params.id;
        axios.get('https://localhost:44334/api/ride/'+this.id)
        .then(response=>{console.log(response.data);
            this.setState({Ride:response.data})
        })
    }
    render(){
        return(
            <div className="rideDetails">
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl4 ms-xxl3">
                            <DocumentCard className="detailsCard">
                                <Label>From</Label>
                                <TextField name="from" value={this.state.Ride.from} disabled/>
                                <Label>To</Label>
                                <TextField name="from" value={this.state.Ride.to} disabled/>
                            </DocumentCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default RideDetails;