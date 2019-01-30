import React from 'react'
import Amplify from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

function Student() {
    return (
        <h1>Hello you are now in the secured student area</h1>
    )
}

export default withAuthenticator(Student, true);
