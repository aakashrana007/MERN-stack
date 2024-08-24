// 1. There is a string
// str = The blue dog jumps over a white lazy dog.
// i. Reverse the string.
// ii. Reverse the order of words in the string
// output : dog lazy white a over jumps dog blue The
// iii. Reverse the characters in each words in a string without changing the order
// of the words
// output: ehT eulb god spmuj revo a etihw yzal god.

"The blue dog jumps over a white lazy dog.".split('')
"The blue dog jumps over a white lazy dog.".split('').reverse()
"The blue dog jumps over a white lazy dog.".split('').reverse().join("")

str="The blue dog jumps over a white lazy dog.";

function reversedString(str){
    return str.split('').reverse().join('');
}

function reversedWords(str){
    return str.split(' ').reverse().join(' ');
}

function reversedChar(str){
    return str.split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reversedString(str));
