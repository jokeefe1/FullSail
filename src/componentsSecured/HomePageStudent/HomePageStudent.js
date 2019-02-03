import { withAuthenticator } from 'aws-amplify-react';
import { default as React, default as React } from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

function HomePageStudent() {
    return (
        <>
            <StudentDashboard />
        </>
    );
}

export default withAuthenticator(HomePageStudent, true);
