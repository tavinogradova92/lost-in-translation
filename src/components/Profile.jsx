import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../state/AppContext';
import './Profile.css';

function Profile() {

    const { setUsername, changeLoginStatus, setSentence } = useContext(AppContext);

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
        setSentence(null);
        localStorage.removeItem("userName");
        localStorage.removeItem("sentences");
        localStorage.removeItem("loginStatus");
        history.push("/");
    };

    const backToTranslation = () => {
        history.push("/translation");
    };

    const clearSentences = () => {
        storedSentences = localStorage.removeItem("sentences");
        setSentence(null);
    }

    return (
        <div className="profileSection">
            <h3>The last ten translations: </h3>
            <ul className="unorderedList">{renderStoredSentences(storedSentences)}</ul>
            <button className="back-button" onClick={backToTranslation}>Back to translation</button>
            <button className="clear-button" onClick={clearSentences}>Clear translated sentences</button>
            <button className="logout-button" onClick={doLogout}>Log Out</button>
        </div>
    )
}

export default Profile;