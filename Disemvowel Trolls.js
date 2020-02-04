// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    let vowels = ["a", "e", "i", "o", "u"]; // declare and initialize vowel array
    return str.split('').filter(function(el) { // returns a split string and filters each word
      return vowels.indexOf(el.toLowerCase()) == -1; // returns the word minus the vowels
    }).join(''); // joins the words back together with a space
}