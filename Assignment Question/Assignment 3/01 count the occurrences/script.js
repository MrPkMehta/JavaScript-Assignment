/**You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces. */


function countWords(string) {
    const words = string.split(" "); //split the string and convert into array of words
    const wordCountMap = new Map(); //store each word 
  
    for (let word of words) { //iterates on each word of the string 
      if (wordCountMap.has(word)) {//checks the repetation of the words in the string
        wordCountMap.set(word, wordCountMap.get(word) + 1);//if repetetation then count is incremented by 1
      } else {
        wordCountMap.set(word, 1); //if it is onny one time in the string then then initional count 1 is shown
      }
    }
  
    return wordCountMap;
  }
  
  // Example usage:
  const text = "the pw skills is the unicorn of the pw companny and the pw armys";
  const wordCount = countWords(text);
  console.log(wordCount);
  
  /**OUTPUT -Map(9) {
  'the' => 4,
  'pw' => 3,
  'skills' => 1,
  'is' => 1,
  'unicorn' => 1,
  'of' => 1,
  'companny' => 1,
  'and' => 1,
  'armys' => 1
} */


