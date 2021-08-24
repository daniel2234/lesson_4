// PROBLEM: [P]EDAC

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"


//goalies

//[go], [goa], [goal], [goali], [goalie], [goalies]
//[oa], [oal], [oali], [oalie], [oalies]
//[al], [ali], [alie], [alies]
//[li], [lie], [lies]
//[ie], [ies]
//[es]




//halo
//[ha], [hal], [halo]
//[al], [alo],
//[lo]

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}