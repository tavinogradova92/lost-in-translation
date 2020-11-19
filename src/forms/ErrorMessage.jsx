import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {

    let errorDisplay = null;

    if (props.error) {
        errorDisplay = (
          <section className="loginFeedback">
            <p>{ props.error }</p>
          </section>
        )
    }

    return (
        <div className="loginFeedback">
            { errorDisplay }
        </div>
    )
}

export default ErrorMessage;