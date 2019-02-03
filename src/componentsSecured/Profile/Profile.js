import { PhotoPicker } from 'aws-amplify-react';
import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const profile = this.props.profilesData.map(profile => {
            return (
                <div key={profile.id}>
                    <h3>
                        {`${profile.firstName}`}
                        <button onClick={this.props.handleEdit}>edit</button>
                    </h3>
                </div>
            );
        });

        return (
            <>
                <h1>Student Profile</h1>
                {profile}
                <PhotoPicker
                    preview
                    onLoad={dataURL => this.props.handleImg(dataURL)}
                />
            </>
        );
    }
}
