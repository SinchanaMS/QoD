const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let newWord = [];
let secretKey = "";

const encryptWord = (word, step) => {
  let wordLength = 0;
  while (word[wordLength] !== undefined) {
    wordLength++;
  }
  let alphabetsLength = 0;
  while (alphabets[alphabetsLength] !== undefined) {
    alphabetsLength++;
  }
  for (let i = 0; i < wordLength; i++) {
    for (let j = 0; j < alphabetsLength; j++) {
      if (word[i] === alphabets[j]) {
        newWord[i] = alphabets[j + step];
        secretKey = secretKey + newWord[i];
      }
    }
  }
};

encryptWord("neogcamp", 2);

console.log(secretKey);
