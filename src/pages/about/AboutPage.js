import React from 'react';
import { withRouter } from 'react-router-dom';
import FeedbackForm from "./FeedbackForm";

function AboutPage(props) {
    return <div>
        <h2>About the page</h2>
        <p>Calorie counter helps you track your calories.</p>
        <h3>Leave your feedback:</h3>
        <FeedbackForm onSubmit={handleSubmit} values={{}} errors={{}} onFieldBlur={() => {}} onFieldChange={() => {}} />
    </div>;

    function handleSubmit() {
        // http request

        // props.history
        // props.location
        // props. match

        props.history.push('/');
    }
};

export default withRouter(AboutPage);
