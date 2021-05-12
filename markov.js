
"use strict";

const fsP = require('fs/promises');
const fs = require('fs');
const _ = require('lodash');
const PATH = './eggs.txt';
var text

async function cat(path){
  let contents;
    try {
        contents = await fsP.readFile(path, "utf8");
        // console.log(contents);
        
    } catch (err) {
        console.log(`Error reading ${path}: 
            Error: ENOENT: no such file or directory, open '${path}'`)
        process.exit(1);
    }
    text = contents;
    // console.log('type of text ---->', typeof text);
    let mm = new MarkovMachine(text);
    console.log(mm.words);
}

//let text_test = cat(PATH);
// console.log('text is --->', text_test)




// const TEXT = fs.readFile('./eggs.txt', "utf8");

// const argv = process.argv;
// async function cat(){
//       try {
//         let contents = await fs.readFile('./eggs.txt', "utf8");

//     } catch (err) {
//         console.log(`Error reading ${argv[2]}: 
//             Error: ENOENT: no such file or directory, open '${argv[2]}'`)
//         process.exit(1);
//     }
// }
// cat();

/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
   
    // MORE CODE HERE
    let chains = this.makeChains(words);

    this.words = words
    this.chains = chains

  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    // MORE CODE HERE
    let uniqueWords = new Set(words);
    // console.log(unique_words);
    // return unique_words;
    // console.log("set of words-->", unique_words)
  
    let chain = {};
    for (let word of uniqueWords){
      chain[word] = []
    }
    
    for (let i = 0; i < words.length - 2; i++){
      chain[words[i]].push(words[i+1])
    }
    console.log("chain -->", chain)
    return chain

  }


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
    let uniqueWords = new Set(this.words);
    console.log("uniquewords--->", uniqueWords)
    let firstWords = [...uniqueWords].filter(word => {
      console.log("word[0]-->", word)
      if (word.length === 0){
        return false
      }
      return word[0].toUpperCase() === word[0]
    })
    let randIndex = _.random(0, firstWords.length)
    let currentWord = firstWords[randIndex]
    let text = currentWord;
    for (let i = 0; i < numWords; i++) {
      currentWord = _.sample(this.chains[currentWord])
      text = text + " " + currentWord
    }
    return text;
  }
}

text = fs.readFileSync("./eggs.txt", "utf-8")
//console.log(text);
// let words = text.split(/[ \r\n]+/);
let mm = new MarkovMachine(text);
console.log("text from mm-->", mm.getText())
// console.log(mm)