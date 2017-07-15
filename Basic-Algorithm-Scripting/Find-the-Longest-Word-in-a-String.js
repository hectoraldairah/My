function findLongestWord(str) {
    str = str.split(" "); //Split the string into an array
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i].length); //Push each word length into the array
    }

    arr = arr.sort(sortNumber); //Sort numerically the array
    return arr.pop(); //Pop the last element of the array
}

function sortNumber(a, b) {
    return a - b;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");