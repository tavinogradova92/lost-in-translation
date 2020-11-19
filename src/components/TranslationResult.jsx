import React from 'react';
import translateSentence from '../utils/ImageStorage';

function TranslationResult({sentence}) {

    const translateIntoSignLanguage = (word) =>
    word.map((letter, index) => <img src={letter} key={index} alt="sign" />);

    const renderAllSigns = (words) => {
        return words.map((word, index) => {
            const lettersInWords = translateIntoSignLanguage(word);
            return <div key={index}>{lettersInWords}</div>;
        });
    };

    const signsFromSentence = translateSentence(sentence);

    return (
        <div className="container">
            <section className="translationField">
                <div className="translationBox">
                    { renderAllSigns(signsFromSentence) }
                </div>
            </section>
        </div>
  );
}

export default TranslationResult;