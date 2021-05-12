
"use strict";

const fsP = require('fs/promises');
const fs = require('fs');
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
    // let chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // MORE CODE HERE
    let unique_words = new Set(this.words);
    console.log(unique_words);

  }


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}

text = fs.readFileSync("./eggs.txt", "utf-8")
//console.log(text);
let words = text.split(/[ \r\n]+/);
//let mm = new MarkovMachine(text);
console.log(words)