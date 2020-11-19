import React from 'react';
import { useHistory } from 'react-router-dom';

function Profile() {

    let storedSentences = localStorage.getItem("sentences");

    const renderStoredSentences = (storedSentences) => {
        storedSentences = storedSentences ? storedSentences.split(",") : [];
        return storedSentences.map((sentence, index) => {
            return <li key={index}>{sentence}</li>;
        });
    };
    

    const history = useHistory();

    const doLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("sentences");
        history.push("/");
    };


    return (
        <div>
            <h3>The last ten translations: </h3>
            <ul>{renderStoredSentences(storedSentences)}</ul>
            <button onClick={doLogout}>Log Out</button>
        </div>
    )
}

export default Profile;