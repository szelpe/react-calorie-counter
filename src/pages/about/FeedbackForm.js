import React from 'react';
import InputField from "../../shared/forms/fields/InputField";
import Button from "../../shared/forms/fields/Button";

export default function FeedbackForm(props) {
    return <form onSubmit={handleSubmit}>
        <InputField
            labelText="Name"
            id="name"
            value={props.values.name}
            error={props.errors.name}
            onChange={props.onFieldChange}
            onBlur={props.onFieldBlur}
        />

        <div className="form-group">
            <label htmlFor="feedback">Message</label>
            <textarea
                id="message"
                value={props.values.message}
                onChange={props.onFieldChange}
                onBlur={props.onFieldBlur}
                className="form-control"
            ></textarea>
            <span className="text-danger">{props.errors.message}</span>
        </div>

        <Button>Submit</Button>
    </form>;


    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
    }

};