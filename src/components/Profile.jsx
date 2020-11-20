import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../state/AppContext';

function Profile() {

    const { setUsername, changeLoginStatus } = useContext(AppContext);

    let storedSentences = localStorage.getItem("sentences");

    const renderStoredSentences = (storedSentences) => {
        storedSentences = storedSentences ? storedSentences.split(",") : [];
        return storedSentences.map((sentence, index) => {
            return <li key={index}>{sentence}</li>;
        });
    };
    

    const history = useHistory();

    const doLogout = () => {
        changeLoginStatus(false);
        setUsername(null);
        localStorage.removeItem("userName");
        localStorage.removeItem("sentences");
        localStorage.removeItem("loginStatus");
        history.push("/");
    };

    const backToTranslation = () => {
        history.push("/translation");
    };

    return (
        <div>
            <h3>The last ten translations: </h3>
            <ul>{renderStoredSentences(storedSentences)}</ul>
            <button onClick={backToTranslation}>Back to translation</button>
            <button onClick={doLogout}>Log Out</button>
        </div>
    )
}

export default Profile;