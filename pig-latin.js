/* English to Pig Latin Translator 

Create a program that translates English text to Pig Latin.
The program should take an English phrase as an input from process.argv.

Convert each word to Pig Latin:

If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
Example: Happy = appyh + ay = appyhay

If a word starts with two consonants move the two consonants to the end of the word and add "ay."
Example: Child = Ildch + ay = Ildchay

If a word starts with a vowel add the word "way" at the end of the word.
Example: Awesome = Awesome +way = Awesomeway

Output the translated phrase to the console.

node pigLatin.js "Pig Latin is hard to speak"
# Output: Igpay Atinlay isway ardhay otay eakspay*/

const input = process.argv.slice(2).join(' ');

const vowels = ['a', 'e', 'i', 'o', 'u'];

const words = input.split(' ');


const translatedWords = words.map((word) => {
    const lowerWord = word.toLowerCase();

    // starts with vowel
    if (vowels.includes(lowerWord[0])) {
        return `${lowerWord}way`;
    }

    // starts with two consonants
    if (
        !vowels.includes(lowerWord[0]) &&
        !vowels.includes(lowerWord[1])
    ) {
        return `${lowerWord.slice(2)}${lowerWord.slice(0, 2)}ay`;
    }

    // start with one consonant
    return `${lowerWord.slice(1)}${lowerWord[0]}ay`;
});

console.log(translatedWords.join(' '));