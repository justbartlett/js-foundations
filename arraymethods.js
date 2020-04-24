// create an array
let fruits = ['apple', 'banana']

// access an item in an array
let first = fruits[0]

// loop over an array
fruits.forEach(function(item, index, array){
  console.log(item, index)
})

// add to end of array
let newLength = fruits.push('orange')
// ['apple', 'banana', 'orange']

// remove from end of array
let first = fruits.pop()
// ['apple', 'banana']

// remove from front of array
let first = fruits.shift
// ['banana']

// add to front of array
let newLength = fruits.unshift('strawberry')
// ['strawberry', 'banana']

// find index of an item of an array
let pos = fruits.indexOf('banana')
// 1

// remove an item by index position
let removedItem = fruits.splice(pos, 1)

// copy an array
let shallowCopy = fruits.slice()
// ['strawberry']

// creating an array using the results of a match
// match one d followed by one or more b's followed by one d
// remember matched b's and the following d
// ignore case
let myRe = /d(b+)(d)/i
let myArray = myRe.exec('cdbBdbsbz')

// constructor
// Array() - creates Array objects

// static properties
// Array.length

// get Array[@@species] - the constructor function that is used to create derived objects

// Array.from() method creates a new, shallow copied Array instance from array-like or iterable object
Array.from('foo')
// Array ['f', 'o', 'o']
Array.from([1,2,3], x => x + x)
// Array [2,4,6]

// Array.isArray
Array.isArray([1,2,3]) // true

// Array.of() - creates a new Array from a variable number of arguments regardless of # or type of arguments
Array.of(1, 2, 3) // [1, 2, 3]

// Array.concat() is used to merge two or more arrays, returns new array
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2);
console.log(array3) // => [1,2,3,4,5,6]

