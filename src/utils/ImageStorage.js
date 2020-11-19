import Signs from "../images/individual_signs";

const letterIntoSign = (letter) => {
    switch (letter) {
        case "a":
            return Signs.a;
        case "b":
            return Signs.b;
        case "c":
            return Signs.c;
        case "d":
            return Signs.d;
        case "e":
            return Signs.e;
        case "f":
            return Signs.f;
        case "g":
            return Signs.g;
        case "h":
            return Signs.h;
        case "i":
            return Signs.i;
        case "j":
            return Signs.j;
        case "k":
            return Signs.k;
        case "l":
            return Signs.l;
        case "m":
            return Signs.m;
        case "n":
            return Signs.n;
        case "o":
            return Signs.o;
        case "p":
            return Signs.p;
        case "q":
            return Signs.q;
        case "r":
            return Signs.r;
        case "s":
            return Signs.s;
        case "t":
            return Signs.t;
        case "u":
            return Signs.u;
        case "v":
            return Signs.v;
        case "w":
            return Signs.w;
        case "x":
            return Signs.x;
        case "y":
            return Signs.y;
        case "z":
            return Signs.z;
        default:
            break;
    }
};
const convertToCleanWordArray = (sentence) => {
    return sentence
        ? sentence
              .replace(/[^a-zA-Z ]/g, "")
              .toLowerCase()
              .split(" ")
        : [];
};

const translateWord = (lettersInWord) => {
    const signsFromLetters = [];
    for (const letter of lettersInWord) {
        signsFromLetters.push(letterIntoSign(letter));
    }
    return signsFromLetters;
};

const createWordArrays = (words) => {
    const wordSigns = [];
    for (const word of words) {
        const lettersInWord = word.split("");
        const wordAsSigns = translateWord(lettersInWord);
        wordSigns.push(wordAsSigns);
    }

    return wordSigns;
};

const translateSentence = (sentence) => {
    const words = convertToCleanWordArray(sentence);
    return createWordArrays(words);
};
    
    
export default translateSentence;