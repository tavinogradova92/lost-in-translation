import React, { useState } from 'react';
import './TranslationInput.css';

function SearchField({ onTranslate }) {

    const [sentence, setSentence] = useState("");

    const onKeyPressed = (event) => {
        event.keyCode === 13 && onTranslate();
    };

    const doTranslate = () => {
        onTranslate(sentence);
    };


    return (
        <div className="searchField_container">
            <h3>Write down the translated sentence</h3>
            <div className="searchField">
                <form className="form">
                    <input 
                        type="search"
                        placeholder="Write the word(s) you'd like to translate"
                        maxLength="40"
                        className="inputField"
                        onKeyUp={ onKeyPressed }
                        onChange={(e) => setSentence(e.target.value)}
                    />
                    <button 
                        type="button"
                        disabled={ !sentence.trim() }
                        className="translateButton"
                        onClick={ doTranslate }
                    > 
                        Translate
                    </button>
                </form>
            </div>
        </div>
        
  );
}

export default SearchField;