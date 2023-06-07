// /////////////////////////////loop///////////////////

// 1}

// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[i]
    }
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));




// // 2}

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.
// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
// drop([1, 2, 3], 2) ➞ [3]
// drop([1, 2, 3], 5) ➞ []
// drop([1, 2, 3], 0) ➞ [1, 2, 3]

function drop(arr, index) {
    let main = [];
    for (let i = index; i < arr.length; i++) {
        main.push(arr[i])
    }
    return main
}

console.log(drop([1, 2, 3], 1))
console.log(drop([1, 2, 3], 2))
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0))


// // 3}

// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reverse(arr) {
    let main = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        main.push(arr[i])
    }
    return main
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));




// // 4}

// // Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
// // Examples
// // incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
// // incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
// // incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

function incrementItems(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] + 1)
    }
    return main
}

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));





// 5} 

// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true


function getLastItem(arr) {
    for (let i = 2; i < arr.length; i++) {
        return arr[i]
    }
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));


// // 6}

// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) {
    str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
    }
    return str
}


console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 6}

// Create a function to concatenate two integer arrays.
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]


function concat(arr, arr1) {
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    return arr
}


console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


function concat1(arr, arr1) {
    // return arr.concat(arr1)
    return [...arr, ...arr1]
}
console.log(concat1([1, 3, 5], [2, 6, 8]));
console.log(concat1([7, 8], [10, 9, 1, 1, 2]));
console.log(concat1([4, 5, 1], [3, 3, 3, 3, 3]));


// 7}
// Create a function that takes an array and a string as arguments and returns the index of the string.
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


function findIndex(arr, word) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement === word) {
            return i
        }
    }
    return -1
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// 8}  

// Given an index and an array, return the value of the array with the given index.
// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// Notes
// Math.floor() can be helpful.

function valueAt(arr, index) {

    //     for (let i = Math.floor(index); i < arr.length; i++) {
    //         return arr[i]
    //     }


}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));



// 9}
// Create a function that finds the index of a given item.
// Examples
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.

function search(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement === index) {
            return i
        }
    }
    return -1
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));


// // 10} 

// // Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// // Examples
// // sumArray([1, 2, 3, 4, 5]) ➞ 15
// // sumArray([-1, 0, 1]) ➞ 0
// // sumArray([0, 4, 8, 12]) ➞ 24

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

// 11}

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
// Examples
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(arr, index) {

    for (let i = 0; i < arr.length; i++) {
        const currentelement = arr[i];
        if (currentelement === index) {
            return i
        }
    }
    return -1

}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));


// 12}

// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false


function check(arr, index) {

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]
        if (currentElement === index) {
            return true
        }
    }
    return false

}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// 13}

// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// parseArray([]) ➞ []

function parseArray(arr) {
    let main = [];
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] + str)
    }
    return main
}

console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));

// // 14}

// // Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
// // Examples
// // arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
// // arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
// // arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

function arrBetween(num1, num2, arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]
        if (currentElement > num1 && currentElement < num2) {
            main.push(currentElement)
        }
    }
    return main
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// // 15}

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] * 1)
    }
    return main
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));

// 16}

// Create a function that takes an array and returns the types of values (data types) in a new array.
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(typeof arr[i])
    }
    return main
}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

// 17}

// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false


// 18}

function hasSameBread(arr, arr1) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr || arr[i] === "white bread") {
            return true
        }
    }
    return false
}

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
));

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
));

console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
));

// 19

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
// Examples
// checkSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true

function checkSquareAndCube(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
            return true
        }
    }
    return false
}

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));

// 20

// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.
// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.
// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// determineLever(["e", "f", "l"]) ➞ "first class lever"
// determineLever(["e", "l", "f"]) ➞ "second class lever"
// determineLever(["f", "e", "l"]) ➞ "third class lever"


function determineLever(str) {
    let main = "";
    for (let i = 0; i < str.length; i++) {
        if (str[1] === "f") return "first class lever"
        if (str[1] === "l") return "second class lever"
        if (str[1] === "e") return "third class lever"

    }
    return main
}


console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"]));


// 21}

// Create a function which returns the length of a string, WITHOUT using String.length property.
// length("Hello World") ➞ 11
// length("Edabit") ➞ 6
// length("wash your hands!") ➞ 16

function length(str) {
    let main = 0;
    for (let i = 0; i < str.length; i++) {
        main++
    }
    return main
}

console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));

// 22}

// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

function halfQuarterEighth(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] / 2) {
            main.push(arr[i])
        }
    }
    return main
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));

// 23}

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"
// nSidedShape(1) ➞ "circle"
// nSidedShape(9) ➞ "nonagon"

function nSidedShape(table) {
    switch (table) {
        case 1:
            return "circle"
        case 2:
            return "semi circle"
        case 3:
            return "tringle"
        case 4:
            return "squre"
        case 5:
            return "pentagon"
        case 6:
            return "hexagon"
        case 7:
            return "heptagon"
        case 8:
            return "octagon"
        case 9:
            return "nonagon"
        case 10:
            return "decagon"

    }
}

console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));

// 24}

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

function getMultipliedArr(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] * 2)
    }
    return main
}


console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

// 25}

// Create a function that takes an array of words and transforms it into an array of each word's length.
// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]
// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

function wordLengths(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i].length)
    }
    return main
}

console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

// 26}

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing tahe dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
// // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040
// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276
// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405
// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412

function findDifference(arr, arr1) {
    let total1 = 1;
    let total2 = 1;
    for (let i = 0; i < arr.length; i++) {
        total1 *= arr[i]
        total2 *= arr1[i]
    }
    return Math.abs(total1 - total2)
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));


// 27}

// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"
// evenOrOdd([1]) ➞ "odd"
// evenOrOdd([]) ➞ "even"
// evenOrOdd([0, 1, 5]) ➞ "even"

function evenOrOdd(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum % 2 === 0 ? "even" : "odd"
}


console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));

// 28}

// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r   o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
    let main = " "
    for (let i = 0; i < str.length; i++) {
        main += str[i] + ' '
    }
    return main.trim()
}

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));


// 29}

// Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.
// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

function rotateByOne(arr) {
    let main = []
    let current = main.push(arr.pop())
    for (let i = 0; i < arr.length; i++) {
        main.push(current = arr[i])
    }
    return main
}

console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));

// 30}

// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []

function invertArray(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        main.push(-arr[i])
    }
    return main
}

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([])); 
