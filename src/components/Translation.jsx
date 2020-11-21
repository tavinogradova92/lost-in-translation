import React, { useContext } from 'react';
import TranslationInput from './TranslationInput';
import TranslationResult from './TranslationResult';
import { AppContext } from '../state/AppContext';

function Translation() {

  const { sentence, setSentence } = useContext(AppContext);

  const handleTranslation = (sentenceToTranslate) => {
    updateStoredSentences(sentenceToTranslate);
    setSentence(sentenceToTranslate);
  }

  const updateStoredSentences = (sentenceToStore) => {
    let storedSentences = localStorage.getItem("sentences");
    storedSentences = storedSentences ? storedSentences.split(",") : [];

    if (storedSentences.length > 9) {
        storedSentences.pop();
    }
    storedSentences.unshift(sentenceToStore);

    localStorage.setItem("sentences", storedSentences);
  };

  return (
    <div className="container">
      <TranslationInput
        onTranslate={ handleTranslation }
      />
      <TranslationResult
        sentence={ sentence }  
      />
    </div>
  );
}

export default Translation;