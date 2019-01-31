import Amplify, { Analytics, Storage } from 'aws-amplify';
import { PhotoPicker, S3Album, withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);
Storage.configure({ level: 'private' });

class Student extends React.Component {
    uploadFile = evt => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
            this.setState({ file: name });
        });
    };

    componentDidMount() {
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <>
                <h1>Hello you are now in the secured student area</h1>
                <div className="App">
                    <p> Pick a file</p>
                    <input type="file" onChange={this.uploadFile} />
                    <S3Album level="private" path="" />
                    <PhotoPicker
                        preview
                        onLoad={dataURL => console.log(dataURL)}
                    />
                </div>
            </>
        );
    }
}

export default withAuthenticator(Student, true);
