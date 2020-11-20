import React, { useState } from 'react';

function SearchField({ onTranslate }) {

    const [sentence, setSentence] = useState("");

    const onKeyPressed = (event) => {
        event.keyCode === 13 && onTranslate();
    };

    const doTranslate = () => {
        onTranslate(sentence);
    };


    return (
        <div className="searchField">
            <form>
                <label htmlFor="translation">Translation</label>
                <input 
                    type="search"
                    placeholder="Write the word(s) you'd like to translate"
                    maxLength="40"
                    width="100"
                    onKeyUp={ onKeyPressed }
                    onChange={(e) => setSentence(e.target.value)}
                />
                <button 
                    type="button"
                    disabled={ !sentence.trim() }
                    onClick={ doTranslate }
                > 
                    Translate
                </button>
            </form>
        </div>
  );
}

export default SearchField;