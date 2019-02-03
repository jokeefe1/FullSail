import Amplify, {
    Analytics,
    API,
    graphqlOperation,
    Storage
} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import aws_exports from '../../aws-exports';
import Profile from '../Profile/Profile'
Amplify.configure(aws_exports);
Storage.configure({ level: 'private' });

const query = `
    query {
        listPosts {
        items {
        id
        title
        content
    }
  }
}
`;

class StudentDashboard extends React.Component {
    state = { profile: [] };

    uploadFile = evt => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
            this.setState({ file: name });
        });
    };

    async componentDidMount() {
        Analytics.record('Amplify_CLI');
        const data = await API.graphql(graphqlOperation(query));
        this.setState({ blog: data.data.listPosts.items });
    }

    render() {
        return (
            <>
                <Profile blogData={this.state.profile}/>
            </>
        );
    }
}

export default withAuthenticator(StudentDashboard, true);
