import Amplify, {
    Analytics,
    API,
    graphqlOperation,
    Storage
} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import aws_exports from '../../aws-exports';
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

class Student extends React.Component {
    state = { blog: [] };

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
        console.log(data);
        this.setState({ blog: data.data.listPosts.items });
    }

    render() {
        return (
            <>
                <h1>Hello you are now in the secured student area</h1>
                {this.state.blog.map((post, index) => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>                    );
                })}
            </>
        );
    }
}

export default withAuthenticator(Student, true);
