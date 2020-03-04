import React from 'react';
import './Profile.sass';
import {DocumentCard,Label,TextField} from 'office-ui-fabric-react';

class Profile extends React.Component {
    render() {
        return (
            <div className="ms-Grid profileInfo" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-lg10 ms-xxl8">
                        <DocumentCard className="formcard">
                        <div className="formdata">
                            <Label>Name</Label>
                            <TextField name="name" value="John Wills"/>
                        </div>
                        <div className="formdata">
                            <Label>Email</Label>
                            <TextField name="email" disabled value="johnwills@technovert.com"/>
                        </div>
                        <div className="formdata">
                            <Label>Phone Number</Label>
                            <TextField name="phoneNumber" value="9630258741"/>
                        </div>
                        <input type="button" value="Update"/>
                        </DocumentCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;