import Amplify, { API, graphqlOperation } from 'aws-amplify';
import React from 'react';
import aws_exports from '../../aws-exports';
import { listProfiles } from '../../graphql/queries';
import Profile from '../Profile/Profile';
Amplify.configure(aws_exports);

export default class StudentDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: [],
            img: ''
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    async componentDidMount() {
        const data = await API.graphql(graphqlOperation(listProfiles));
        this.setState({ profiles: data.data.listProfiles.items });
        console.log(data.data.listProfiles.items);
    }

    handleEdit(e) {
        this.setState({ profiles: [{ firstName: e.target.value }] });
    }

    render() {
        return (
            <>
                <Profile
                    profilesData={this.state.profiles}
                    handleImg={this.handleImg}
                    handleEdit={this.handleEdit}
                />
            </>
        );
    }
}
