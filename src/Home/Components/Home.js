import React, { Fragment } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ErrorPage';

const About = () => (
        <div>
            <p>Home page</p>
        </div>    
);

export default withErrorBoundary(About);
