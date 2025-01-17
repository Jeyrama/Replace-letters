/*
In input string word(1 word):
  replace the vowel with the nearest left consonant.
  replace the consonant with the nearest right vowel.

P.S. To complete this task imagine the alphabet is a circle 
(connect the first and last element of the array in the mind). 
For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:
  'codewars' => 'enedazuu'
  'cat' => 'ezu'
  'abcdtuvwxyz' => 'zeeeutaaaaa'

It is preloaded:
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];

Note: You work with lowercase letters only.
*/


// Solution

function replaceLetters(word) {
  const charMap = {
    'a': 'z', 'b': 'e', 'c': 'e', 'd': 'e', 'e': 'd', 'f': 'i', 'g': 'i', 'h': 'i', 'i': 'h',
    'j': 'o', 'k': 'o', 'l': 'o', 'm': 'o', 'n': 'o', 'o': 'n', 'p': 'u', 'q': 'u', 'r': 'u',
    's': 'u', 't': 'u', 'u': 't', 'v': 'a', 'w': 'a', 'x': 'a', 'y': 'a', 'z': 'a'
  };
  
  return word.split('').map(e => charMap[e]).join('');
}

// or

function replaceLetters(word) {
  return [...word].map(l =>{
    if( consonants.includes(l) ){
      let nextL = alphabet.slice( alphabet.indexOf(l) )
                          .find( el => vowels.includes(el) );
      return nextL || 'a';
    } else if( vowels.includes(l) ) {
      let precL = alphabet.slice(0, alphabet.indexOf(l) )
                          .reverse()
                          .find( el => consonants.includes(el) );
      return precL || 'z';
    }
    
  }).join``;
}