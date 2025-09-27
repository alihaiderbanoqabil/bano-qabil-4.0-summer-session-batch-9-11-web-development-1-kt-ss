const greet = "Hello, World!";
console.log(greet);
console.log(greet.length);
console.log(greet.at(0));
console.log(greet.at(20));

// String methods examples

const string = "Returns the character at a specified index (position)";
console.log(string); // "Returns the character at a specified index (position)"

// charAt vs at
console.log(string.charAt(0));   // "R"
console.log(string.charAt(-2));  // "" (empty, charAt doesn't support negatives)
console.log(string.at(-1));      // ")"
console.log(string.at(-2));      // "n"

// concat
const string2 = "ali";
console.log(string.concat(string2));           // "...ali"
console.log(string.concat("", string2));       // "...ali"
console.log(string.concat(" ", string2));      // "... ali"

// startsWith & endsWith
console.log(string.endsWith(")"));             // true
console.log(string.endsWith("(position)"));    // true
console.log(string.endsWith("(positin)"));     // false
console.log(string.startsWith("Returns"));     // true
console.log(string.startsWith("returns"));     // false

// includes
console.log(string.includes("the"));           // true
console.log(string.includes("ali"));           // false

// indexOf & lastIndexOf
console.log(string.indexOf("R"));              // 0
console.log(string.indexOf("e"));              // 1
console.log(string.indexOf("e", 7));           // 10
console.log(string.indexOf("Re"));             // 0
console.log(string.indexOf("r"));              // 4
console.log(string.indexOf("re"));             // -1 (case sensitive)

console.log(string.lastIndexOf("re"));         // -1
console.log(string.lastIndexOf("Re"));         // 0
console.log(string.lastIndexOf("n"));          // 51
console.log(string.indexOf("n"));              // 5

// repeat
console.log("ali".repeat(5));                  // "alialialialiali"
console.log("ali".repeat(10));                 // "ali..." (10 times)

// trim, trimStart
console.log("      ali     haider   ".trim());       // "ali     haider"
console.log("      ali     haider   ".trimStart());  // "ali     haider   "

// case conversion
console.log("ali haider".toUpperCase());       // "ALI HAIDER"
console.log("Ali Haider".toLowerCase());       // "ali haider"

// split
console.log("Ali Haider".split(" "));          // ["Ali", "Haider"]

// replace vs replaceAll
console.log("Ali Haider".replace("Ali", "Hasnain"));       // "Hasnain Haider"
console.log("Ali Haider".replace("ali", "Hasnain"));       // "Ali Haider" (case-sensitive)
console.log("Ali Haider Ali".replace("Ali", "Hasnain"));   // "Hasnain Haider Ali"
console.log("Ali Haider Ali".replaceAll("Ali", "Hasnain"));// "Hasnain Haider Hasnain"
