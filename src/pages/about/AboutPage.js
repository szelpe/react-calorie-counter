import React from 'react';
import FeedbackForm from "./FeedbackForm";

export default function AboutPage(props) {
    return <div>
        <h2>About the page</h2>
        <p>Calorie counter helps you track your calories.</p>
        <h3>Leave your feedback:</h3>
        <FeedbackForm values={{}} errors={{}} onFieldBlur={() => {}} onFieldChange={() => {}} />
    </div>;
};
